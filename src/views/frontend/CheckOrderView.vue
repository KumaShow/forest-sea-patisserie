<template>
  <main class="check-order container py-11">
    <div v-if="cart.carts.length">
      <!-- 訂單進度 -->
      <OrderTimeLine :step="step" />
      <!-- 訂單檢視 -->
      <section class="row mb-11">
        <div class="col-md-8">
          <h2 class="my-6 fs-5">確認訂單內容</h2>
          <section>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th width="55%">產品資料</th>
                  <th width="20%">數量/單位</th>
                  <th width="20%" class="text-center">單價</th>
                  <th width="5%"></th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        alt=""
                        class="object-cover me-4"
                        style="width: 80px; height: 80px"
                      />
                      <span>{{ item.product.title }}</span>
                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <div class="input-group">
                          <input
                            v-model.number="item.qty"
                            @blur="updateCartItem(item)"
                            class="form-control"
                            min="1"
                            max="20"
                            type="number"
                          />
                          <!-- :disabled="loadingItem === item.id" -->
                          <span class="input-group-text" id="basic-addon2">{{
                            item.product.unit
                          }}</span>
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
                        <span class="material-symbols-outlined"> delete </span>
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="mt-9 row">
              <!-- 優惠碼 -->
              <div class="col-8">
                <div class="input-group d-flex align-items-center w-75">
                  <div class="me-2">
                    <input
                      type="text"
                      class="form-control rounded-1 p-2"
                      placeholder="請輸入優惠碼"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary rounded-1 py-2 px-10"
                  >
                    套用
                  </button>
                </div>
              </div>
              <!-- 總金額 -->
              <div class="col-4">
                <div v-if="cart.total === cart.final_total" class="text-end">
                  <p class="fs-4 fw-bold">
                    總計:
                    <span>NT$ {{ cart.total }}</span>
                  </p>
                </div>
                <div v-else class="d-flex text-end text-success">
                  <p class="fs-4 fw-bold">
                    折扣價:
                    <span>NT$ {{ cart.final_total }}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- 訂購人資料表單 -->
        <div class="col-md-4">
          <OrderForm class="bg-light" />
        </div>
      </section>
    </div>

    <!-- 無商品顯示畫面 -->
    <section v-else class="py-15 text-center">
      <p class="fs-3 mb-14">購物車無商品</p>
      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="linkToProducts"
      >
        找甜點去
      </button>
    </section>

    <!-- 推薦商品 -->
    <section>
      <h3 class="mb-8">推薦商品</h3>
      <ProductsCarousel />
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useCartStore from "@/stores/useCartStore";
import OrderForm from "@/components/frontend/OrderForm.vue";
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";

export default {
  components: { OrderForm, ProductsCarousel, OrderTimeLine },
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useCartStore, [
      "deleteCartItem",
      "updateCartItem",
      "linkToProducts",
    ]),
  },
};
</script>

<style lang="scss" scoped></style>
