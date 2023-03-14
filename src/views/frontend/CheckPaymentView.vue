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
        <div class="col-lg-8">
          <h2 class="my-6 fs-5">確認付款內容</h2>
          <!-- 訂單產品資料 -->
          <section>
            <table class="table align-middle border bg-white">
              <thead>
                <tr>
                  <th width="15%">商品內容</th>
                  <th width="40%"></th>
                  <th width="15%">數量</th>
                  <th width="15%">單價</th>
                  <th width="15%" class="text-end">金額</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="order">
                  <tr v-for="item in order.products" :key="item.id">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        alt=""
                        class="object-cover me-4"
                        style="width: 80px; height: 80px"
                      />
                    </td>
                    <td>
                      <span>{{ item.product.title }}</span>
                    </td>
                    <td class="">{{ item.qty }}</td>
                    <td class="">NT$ {{ item.product.price }}</td>
                    <td class="text-end">
                      NT$ {{ Math.round(item.final_total) }}
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <!-- 總金額 -->
            <div class="mt-9 text-end">
              <p class="fs-4 fw-bold">
                總計:
                <span>NT$ {{ Math.round(order.total) }}</span>
              </p>
            </div>
          </section>
        </div>
        <!-- 訂購人資料 -->
        <section class="col-10 col-lg-4">
          <div class="p-8 bg-white border">
            <!-- 訂單資訊 -->
            <div class="mb-8">
              <h2 class="mb-6 fs-5">訂單資訊</h2>
              <ul>
                <li class="row mb-2">
                  <span class="col-4 col-lg-5">訂購時間 :</span>
                  {{ order.create_at }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 col-lg-5">訂單編號 :</span>
                  {{ order.id }}
                </li>
                <li class="row mb-2">
                  <span class="col-4 col-lg-5">付款狀態 :</span>
                  <span v-if="order.is_paid" class="text-success p-0 w-auto">
                    已付款
                  </span>
                  <span v-else class="text-danger p-0 w-auto"
                    >尚須付款 <b>NT$ {{ Math.round(order.total) }}</b></span
                  >
                </li>
              </ul>
            </div>
            <!-- 訂購人資訊 -->
            <div>
              <h2 class="mb-6 fs-5">訂購人資料</h2>
              <ul>
                <li class="row mb-2">
                  <span class="col-4">姓名 :</span>
                  {{ order.user.name }}
                </li>
                <li class="row mb-2">
                  <span class="col-4">Email :</span>
                  {{ order.user.email }}
                </li>
                <li class="row mb-2">
                  <span class="col-4">電話 :</span>
                  {{ order.user.tel }}
                </li>
                <li class="row mb-2">
                  <span class="col-4">地址 :</span>
                  {{ order.user.address }}
                </li>
                <li class="row mb-2">
                  <span class="col-4">留言 :</span>
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
import useCartStore from "@/stores/useCartStore";
import useOrderStore from "@/stores/useOrderStore";
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
    ...mapActions(useOrderStore, ["getOrder"]),

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
          console.log(err);
        });
    },
  },
  mounted() {
    this.getOrder(this.id);
  },
};
</script>

<!-- TODO: 付款成功取得當下時間，建立付款時間 -->
