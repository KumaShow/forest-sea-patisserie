<template>
  <main class="favorite container py-11 main-height">
    <h2 class="text-center mb-10 font-serif">我的最愛</h2>
    <div class="text-center py-10 mb-11">
      <p class="mb-13 fs-3">目前還沒有收藏呢!</p>
      <RouterLink to="/products" class="btn btn-outline-primary">
        找甜點去
      </RouterLink>
    </div>
    <!-- 推薦商品 -->
    <section class="">
      <h3 class="mb-8">推薦商品</h3>
      <ProductsCarousel />
    </section>
  </main>
</template>

<script>
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";

export default {
  components: {
    ProductsCarousel,
  },
};
</script>

<style lang="scss" scoped></style>
