<template>
  <main class="check-order-completed container py-11">
    <!-- 訂單進度 -->
    <OrderTimeLine :step="step" />
    <!-- 訂單成立 -->
    <h2 class="text-center">訂單已成立</h2>
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
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import OrderTimeLine from "@/components/frontend/OrderTimeLine.vue";

export default {
  components: { ProductsCarousel, OrderTimeLine },
  data() {
    return {
      step: 3,
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
