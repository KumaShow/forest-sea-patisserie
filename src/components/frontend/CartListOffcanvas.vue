<template>
  <div
    ref="cartOffcanvas"
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header bg-primary">
      <h5 class="offcanvas-title text-white" id="offcanvasRightLabel">
        購物車
      </h5>
      <button
        type="button"
        class="btn p-0 text-white d-flex"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div class="offcanvas-body bg-mask-texture">
      <div class="text-end mb-6">
        <button
          v-show="cart.carts.length"
          type="button"
          class="btn btn-outline-secondary"
          @click="openDeleteModal('all')"
        >
          清空購物車
        </button>
      </div>
      <div class="position-relative h-75">
        <!-- 購物車無產品 -->
        <div
          class="text-center position-absolute top-50 start-50 translate-middle"
          v-if="!cart.carts.length"
        >
          <p class="fs-3 my-10">目前無商品</p>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-1"
            data-bs-dismiss="offcanvas"
            @click="$router.push('/products')"
          >
            找甜點去
          </button>
        </div>
        <!-- 購物車有產品 -->
        <div v-else>
          <ul>
            <li
              class="d-flex align-items-center mb-2 pb-2 border-bottom"
              v-for="cart in cart.carts"
              :key="cart.id"
            >
              <div class="w-auto me-4">
                <img
                  :src="cart.product.imageUrl"
                  :alt="cart.product.title"
                  class="object-cover"
                  style="width: 80px; height: 80px"
                />
              </div>
              <div
                class="d-flex justify-content-between align-items-center w-100"
              >
                <div>
                  <p>{{ cart.product.title }}</p>
                  <span>{{ cart.qty }} x </span>
                  <span>NT$ {{ cart.product.price }}</span>
                </div>
                <button
                  type="button"
                  class="btn"
                  @click="openDeleteModal('item', cart)"
                >
                  <span class="material-symbols-outlined"> delete </span>
                </button>
              </div>
            </li>
          </ul>
          <div class="mt-4">
            <p class="text-end fs-3 mb-5">總計: ${{ cart.final_total }}</p>
            <button
              type="button"
              class="btn btn-primary w-100 rounded-1 py-2"
              @click="this.$router.push('/checkOrder')"
              :disabled="!cart.carts.length"
              data-bs-dismiss="offcanvas"
            >
              前往結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AlertDeleteCart
    ref="alertDeleteCart"
    :delete-state="deleteState"
    :cart-item="cartItem"
  />
</template>

<script>
import AlertDeleteCart from "@/components/frontend/AlertDeleteCart.vue";
import useCartStore from "@/stores/CartStore";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    AlertDeleteCart,
  },
  data() {
    return {
      offcanvas: {},
      deleteState: "",
      cartItem: "",
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useCartStore, [
      "getCarts",
      "clearAllCarts",
      "deleteCartItem",
    ]),

    openDeleteModal(state, item) {
      this.deleteState = state;
      this.cartItem = item;
      this.$refs.alertDeleteCart.openModal();
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style scoped>
.btn-outline-secondary:active {
  color: #fff;
}
</style>
