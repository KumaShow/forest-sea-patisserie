<template>
  <ul v-if="cart.carts" class="mb-10">
    <template v-for="item in cart.carts" :key="item.id">
      <li
        class="product-item row align-items-center gx-4 border-bottom mb-6 pb-6"
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
          <div class="d-flex justify-content-between align-items-center">
            <!-- 價格 -->
            <div>
              <p
                v-if="item.product.origin_price === item.product.price"
                class="text-primary fs-md-6"
              >
                <span class="fs-9 fs-md-8">NT$ </span>
                {{ item.product.price }}
              </p>
              <p v-else class="text-primary fs-md-6">
                <!-- 售價 -->
                <span class="fs-9 fs-md-8">NT$ </span>{{ item.product.price }}
                <!-- 原價 -->
                <del class="fs-9 fs-md-8 text-neutral-500">
                  <span class="text-neutral-500">NT$ </span>
                  {{ item.product.origin_price }}
                </del>
              </p>
            </div>
            <!-- 數量 -->
            <div>
              <div class="d-flex align-items-center w-auto">
                <button
                  type="button"
                  class="btn btn-inherit text-dark p-0"
                  @click="updateProduct('remove', item)"
                >
                  <span class="material-symbols-outlined d-block">
                    remove
                  </span>
                </button>
                <input type="number" v-model="item.qty" class="btn input-num" />
                <button
                  class="btn btn-inherit text-dark p-0"
                  type="button"
                  @click="updateProduct('add', item)"
                >
                  <span class="material-symbols-outlined d-block"> add </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </template>
  </ul>
  <!-- 優惠碼 -->
  <div class="mt-md-9 row align-items-center">
    <div class="col-sm-8 col-md-7 mb-4 mb-lg-0">
      <div
        class="input-group align-items-center justify-content-between flex-nowrap"
      >
        <div class="me-2 flex-fill">
          <input
            type="text"
            v-model="couponCode"
            class="form-control rounded-1 p-2 flex-sm-grow-0"
            placeholder="請輸入優惠碼"
          />
        </div>
        <div class="col-3 col-md-4">
          <button
            type="button"
            class="btn btn-primary w-100 px-6 py-2 rounded-1"
            @click="postCoupon"
            :disabled="!couponCode"
          >
            套用
          </button>
        </div>
      </div>
    </div>
    <!-- 總金額 -->
    <div class="col-sm-4 col-md-5">
      <div v-if="cart.total === cart.final_total" class="text-end">
        <p class="fs-6 fw-bold">
          總計:
          <span>NT$ {{ cart.total }}</span>
        </p>
      </div>
      <div v-else class="text-end">
        <div>
          <del class="fs-7 text-neutral-500">原價: NT$ {{ cart.total }}</del>
          <p class="text-primary fs-6 fw-bold">
            折扣後: NT$ {{ Math.round(cart.final_total) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useLoadingStore from "@/stores/useLoadingStore";
import useCartStore from "@/stores/useCartStore";
import { debounce } from "lodash";
const { VITE_API, VITE_API_PATH } = import.meta.env;

export default {
  props: ["productList"],
  data() {
    return {
      couponCode: "",
      final_total: 0,
      qty: 1,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useLoadingStore, ["loadingItem"]),
  },
  methods: {
    ...mapActions(useCartStore, [
      "deleteCartItem",
      "updateCartItem",
      "getCarts",
    ]),

    updateProduct(count, item) {
      if (count === "remove") {
        item.qty -= 1;
      } else {
        item.qty += 1;
      }
      this.updateCartDebounce(item);
    },
    updateCartDebounce: debounce(function (item) {
      this.updateCartItem(item);
    }, 500),

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

<style lang="scss" scoped>
@import "@/assets/stylesheets/helpers/mixin.scss";

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-num {
  padding: 6px 0;
  max-width: 40px;

  @include respond-min(sm) {
    max-width: 80px;
  }
}
</style>
