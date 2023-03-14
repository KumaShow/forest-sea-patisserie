<template>
  <div class="bg-mask-texture">
    <main class="check-order-completed container py-11">
      <h2 class="mb-9 font-serif text-center">訂單已成立</h2>
      <!-- 訂單進度 -->
      <div class="mb-9">
        <OrderTimeLine :step="step" />
      </div>
      <!-- 訂單詳細區塊 -->
      <div class="row justify-content-center mb-11 g-8">
        <!-- 訂單產品資料 -->
        <section class="col-lg-8">
          <h3 class="my-6 fs-5">訂單明細</h3>
          <div>
            <table class="table align-middle border bg-white">
              <thead>
                <tr>
                  <th width="12%">商品內容</th>
                  <th width="30%"></th>
                  <th width="18%" class="text-center">數量</th>
                  <th width="20%" class="text-center">單價</th>
                  <th width="20%" class="text-end">金額</th>
                </tr>
              </thead>
              <tbody>
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
                  <td class="text-center">{{ item.qty }}</td>
                  <td class="text-center">NT$ {{ item.product.price }}</td>
                  <td class="text-end">
                    NT$ {{ Math.round(item.final_total) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 總金額 -->
            <div class="mt-9 text-end">
              <p class="fs-4 fw-bold">
                總計:
                <span>NT$ {{ Math.round(order.total) }}</span>
              </p>
            </div>
          </div>
        </section>
        <!-- 訂購人資料 -->
        <section class="col-sm-10 col-md-7 col-lg-4">
          <div class="p-8 bg-white border">
            <!-- 訂單資訊 -->
            <div class="mb-8">
              <h3 class="mb-6 fs-5">訂單資訊</h3>
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
          </div>
        </section>
      </div>

      <div class="text-center my-10">
        <button
          type="button"
          class="btn btn-secondary text-white rounded-1 px-6 px-md-10 py-2 py-md-4"
          @click="$router.push('/products')"
        >
          繼續購物
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useOrderStore from "@/stores/useOrderStore";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";

export default {
  components: { OrderTimeLine },
  props: ["id"],
  data() {
    return {
      step: 3,
    };
  },
  computed: {
    ...mapState(useOrderStore, ["order"]),
  },
  methods: {
    ...mapActions(useOrderStore, ["getOrder"]),
  },
  mounted() {
    this.getOrder(this.id);
  },
};
</script>
