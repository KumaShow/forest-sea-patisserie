<template>
  <main class="check-order container py-11">
    <!-- 訂單進度 -->
    <OrderTimeLine :step="step" />
    <!-- 訂單確認付款 -->
    <section class="row mb-11">
      <div class="col-md-8">
        <h2 class="my-6 fs-5">確認付款內容</h2>
        <!-- 訂單產品資料 -->
        <section>
          <table class="table align-middle">
            <thead>
              <tr>
                <th width="50%">商品內容</th>
                <th width="10%" class="text-center">數量</th>
                <th width="20%" class="text-center">單價</th>
                <th width="20%" class="text-end">金額</th>
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
                    <span>{{ item.product.title }}</span>
                  </td>
                  <td class="text-center">{{ item.qty }}</td>
                  <td class="text-center">NT$ {{ item.product.price }}</td>
                  <td class="text-end">NT$ {{ item.final_total }}</td>
                </tr>
              </template>
            </tbody>
          </table>
          <!-- 總金額 -->
          <div class="mt-9 text-end">
            <p class="fs-4 fw-bold">
              總計:
              <span>NT$ {{ order.total }}</span>
            </p>
          </div>
        </section>
      </div>
      <!-- 訂購人資料 -->
      <section class="col-md-4">
        <div class="p-8 bg-light">
          <!-- 訂單資訊 -->
          <div class="mb-8">
            <h2 class="mb-6 fs-5">訂單資訊</h2>
            <ul>
              <li class="row mb-2">
                <span class="col-4">訂購時間 :</span>
                {{ order.create_at }}
              </li>
              <li class="row mb-2">
                <span class="col-4">訂單編號 :</span>
                {{ order.id }}
              </li>
              <li class="row mb-2">
                <span class="col-4">付款狀態 :</span>
                <span v-if="order.is_paid" class="text-success p-0 w-auto">
                  已付款
                </span>
                <span v-else class="text-danger p-0 w-auto"
                  >尚須付款 <b>NT$ {{ order.total }}</b></span
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
          <button
            type="button"
            class="btn btn-primary mt-8 py-2 w-100"
            @click="postPayment(order.id)"
          >
            確認付款
          </button>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useCartStore from "@/stores/useCartStore";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";
const { VITE_API, VITE_API_PATH } = import.meta.env;

export default {
  components: { OrderTimeLine },
  props: ["id"],
  data() {
    return {
      step: 2,
      order: {
        products: [],
        user: {
          address: "",
          email: "",
          name: "",
          tel: "",
        },
      },
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useCartStore, ["deleteCartItem", "updateCartItem"]),

    // 取得訂單資料
    getOrder(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/order/${id}`;

      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.order;
          console.log(res);
          console.log("訂單資料:", this.order);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 送出付款請求
    postPayment(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/pay/${id}`;

      this.$http
        .post(url, id)
        .then((res) => {
          console.log(res);
          this.getOrder(this.order.id);
          this.$router.push("/checkOrderCompleted");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.id);
    this.getOrder(this.id);
  },
};
</script>

<style lang="scss" scoped></style>

<!-- TODO: 付款成功取得當下時間，建立付款時間 -->
