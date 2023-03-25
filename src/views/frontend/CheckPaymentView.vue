<template>
  <div class="bg-mask-texture">
    <main class="check-order container py-11">
      <h2 class="mb-9 font-serif text-center">確認結帳</h2>
      <!-- 訂單進度 -->
      <div class="mb-9">
        <OrderTimeLine :step="step" />
      </div>
      <!-- 訂單確認付款 -->
      <div class="row justify-content-center mb-11 g-8">
        <div class="col-md-7">
          <h2 class="my-6 fs-5">確認付款內容</h2>
          <!-- 訂單產品資料 -->
          <ul v-if="order" class="p-1">
            <template v-for="item in order.products" :key="item.id">
              <li
                class="product-item row align-items-center gx-4 border-bottom pb-6"
              >
                <!-- 商品圖片 -->
                <div class="col overflow-hidden">
                  <img
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                    class="object-cover w-100"
                    style="max-height: 150px"
                  />
                </div>
                <!-- 商品內容 -->
                <div class="col-8">
                  <h4 class="fs-7 fs-md-5 mb-2">{{ item.product.title }}</h4>
                  <p class="fs-8 fs-md-7 mb-1 text-truncate-2 text-neutral-700">
                    {{ item.product.description }}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <!-- 價格 -->
                    <div>
                      <p>
                        NT$ {{ Math.round(item.final_total) }} x {{ item.qty }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <div class="mt-6 text-end">
            <p class="fs-4 fw-bold">
              總計:
              <span>NT$ {{ Math.round(order.total) }}</span>
            </p>
          </div>
        </div>
        <!-- 訂購人資料 -->
        <section class="col-md-5">
          <div class="p-8 bg-white border">
            <!-- 訂單資訊 -->
            <div class="mb-8">
              <h2 class="mb-6 fs-5">訂單資訊</h2>
              <ul>
                <li class="row mb-2">
                  <span class="w-auto me-auto">訂購時間 :</span>
                  {{ createDate(order.create_at) }}
                </li>
                <li class="row mb-2">
                  <span class="w-auto me-auto">訂單編號 :</span>
                  {{ order.id }}
                </li>
                <li class="row mb-2">
                  <span class="w-auto me-auto me-auto">付款狀態 :</span>
                  <span v-if="order.is_paid" class="text-success p-0 w-auto">
                    已付款
                  </span>
                  <span v-else class="text-danger p-0 w-auto">
                    尚須付款 <b>NT$ {{ Math.round(order.total) }}</b>
                  </span>
                </li>
              </ul>
            </div>
            <!-- 訂購人資訊 -->
            <div>
              <h2 class="mb-6 fs-5">訂購人資料</h2>
              <ul>
                <li class="row mb-2">
                  <span class="col-4 me-auto">姓名 :</span>
                  {{ order.user.name }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 me-auto">Email :</span>
                  {{ order.user.email }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 me-auto">電話 :</span>
                  {{ order.user.tel }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 me-auto">地址 :</span>
                  {{ order.user.address }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 me-auto">留言 :</span>
                  {{ order.message }}
                </li>
              </ul>
            </div>
            <div class="text-end">
              <button
                type="button"
                class="btn btn-primary mt-8 w-lg-100 px-6 px-md-10 py-2 py-md-4 rounded-1"
                @click="postPayment(order.id)"
              >
                確認付款
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useCartStore from "@/stores/CartStore";
import useOrderStore from "@/stores/OrderStore";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";
const { VITE_API, VITE_API_PATH } = import.meta.env;

export default {
  components: { OrderTimeLine },
  props: ["id"],
  data() {
    return {
      step: 2,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useOrderStore, ["order"]),
  },
  methods: {
    ...mapActions(useCartStore, ["deleteCartItem", "updateCartItem"]),
    ...mapActions(useOrderStore, ["getOrder", "createDate"]),

    // // 送出付款請求
    postPayment(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/pay/${id}`;

      this.$http
        .post(url, id)
        .then(() => {
          this.getOrder(this.order.id);

          this.$router.push({
            name: "checkOrderCompleted",
            params: { id: this.order.id },
          });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    this.getOrder(this.id);
  },
};
</script>
