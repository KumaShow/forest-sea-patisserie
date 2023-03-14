<template>
  <div class="bg-mask-texture">
    <main class="check-order container py-11">
      <h2 class="mb-9 font-serif text-center">購物車</h2>
      <template v-if="cart.carts.length">
        <!-- 訂單進度 -->
        <div class="mb-9">
          <OrderTimeLine :step="step" />
        </div>
        <!-- 訂單檢視 -->
        <section class="row justify-content-center mb-11 g-8">
          <div class="col-lg-8">
            <h3 class="my-6 fs-5">確認訂單內容</h3>
            <section>
              <table class="table align-middle bg-white border">
                <thead>
                  <tr>
                    <th width="20%"></th>
                    <th width="35%">產品資料</th>
                    <th width="22%">數量</th>
                    <th width="20%" class="text-center">單價</th>
                    <th width="3%"></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td>
                        <img
                          :src="item.product.imageUrl"
                          alt=""
                          class="object-cover"
                          style="max-width: 80px; height: 80px"
                        />
                      </td>
                      <td>
                        <span>{{ item.product.title }}</span>
                      </td>
                      <td>
                        <div class="input-group input-group-sm">
                          <div class="input-group">
                            <input
                              v-model.number="item.qty"
                              @blur="updateCartItem(item)"
                              type="number"
                              class="form-control text-center"
                              :disabled="loadingItem === item.id"
                            />
                          </div>
                        </div>
                      </td>
                      <td class="text-end">
                        <small class="text-success" v-if="item.coupon_code"
                          >折扣價：</small
                        >
                        NT$ {{ item.total }}
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn d-flex"
                          @click="deleteCartItem(item.id)"
                        >
                          <span class="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
              <div class="mt-md-9 row align-items-center">
                <!-- 優惠碼 -->
                <div class="col-md-8 mb-4 mb-lg-0">
                  <div class="input-group align-items-center">
                    <div class="me-2 flex-fill flex-md-grow-0">
                      <input
                        type="text"
                        v-model="couponCode"
                        class="form-control rounded-1 p-2"
                        placeholder="請輸入優惠碼"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary rounded-1 py-2 px-10"
                      @click="postCoupon"
                    >
                      套用
                    </button>
                  </div>
                </div>
                <!-- 總金額 -->
                <div class="col-md-4">
                  <div v-if="cart.total === cart.final_total" class="text-end">
                    <p class="fs-4 fw-bold">
                      總計:
                      <span>NT$ {{ cart.total }}</span>
                    </p>
                  </div>
                  <div v-else class="text-end">
                    <div class="">
                      <del class="fs-7 text-neutral-500"
                        >原價: NT$ {{ cart.total }}</del
                      >
                      <p class="text-primary fs-5 fw-bold">
                        折扣後: NT$ {{ countFinalTotal }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- 訂購人資料表單 -->
          <div class="col-10 col-lg-4">
            <OrderForm class="bg-white border" />
          </div>
        </section>
      </template>

      <!-- 無商品顯示畫面 -->
      <template v-else>
        <div class="py-10 text-center">
          <p class="fs-5 mb-14">購物車無商品，快去購買喜歡的甜點吧！</p>
          <button
            type="button"
            class="btn btn-secondary text-white rounded-1 px-6 px-md-10 py-2 py-md-4"
            @click="$router.push('/products')"
          >
            找甜點去
          </button>
        </div>
      </template>

      <!-- 熱門商品 -->
      <section>
        <h3 class="mb-8">熱門商品</h3>
        <ProductsCarousel :props-products="filterHotProducts" />
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useCartStore from "@/stores/useCartStore";
import useProductStore from "@/stores/useProductStore";
import useLoadingStore from "@/stores/useLoadingStore";
import useToastMessageStore from "@/stores/useToastMessageStore";
import OrderForm from "@/components/frontend/OrderForm.vue";
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";
import debounce from "lodash/debounce";
const { VITE_API, VITE_API_PATH } = import.meta.env;

export default {
  components: { OrderForm, ProductsCarousel, OrderTimeLine },
  data() {
    return {
      step: 1,
      couponCode: "",
      final_total: null,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useProductStore, ["filterHotProducts"]),
    ...mapState(useLoadingStore, ["loadingItem"]),

    countFinalTotal() {
      return Math.round(this.final_total);
    },
  },
  methods: {
    ...mapActions(useCartStore, [
      "deleteCartItem",
      "updateCartItem",
      "getCarts",
    ]),
    ...mapActions(useToastMessageStore, ["pushMessage"]),

    // 取得折扣 使用 lodash debounce 防止用戶多次觸發
    postCoupon: debounce(
      function () {
        const url = `${VITE_API}/api/${VITE_API_PATH}/coupon`;
        const data = {
          data: {
            code: this.couponCode,
          },
        };
        this.$http
          .post(url, data)
          .then((res) => {
            console.log(res.data.data.final_total);
            this.final_total = res.data.data.final_total;
            this.getCarts();
            this.pushMessage({
              title: "套用優惠券成功",
              content: res.data.message,
            });
          })
          .catch((err) => {
            this.pushMessage({
              style: "danger",
              title: "套用優惠券失敗",
              content: err.response.data.message,
            });
          });
      },
      800,
      { immediate: true }
    ),
  },
};
</script>

<!-- TODO: 手機 touch 無法加減數量 -->
