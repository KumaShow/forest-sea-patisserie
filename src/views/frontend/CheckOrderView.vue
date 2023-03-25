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
          <div class="col-md-7">
            <h3 class="my-6 fs-5">確認訂單內容</h3>
            <OrderProductList />
          </div>
          <!-- 訂購人資料表單 -->
          <div class="col-md-5">
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
import useCartStore from "@/stores/CartStore";
import useProductStore from "@/stores/ProductStore";
import useToastMessageStore from "@/stores/ToastMessageStore";
import OrderForm from "@/components/frontend/OrderForm.vue";
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";
import OrderProductList from "@/components/frontend/OrderProductList.vue";

export default {
  components: { OrderForm, ProductsCarousel, OrderTimeLine, OrderProductList },
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useProductStore, ["filterHotProducts"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getCarts"]),
    ...mapActions(useToastMessageStore, ["pushMessage"]),
  },
};
</script>
