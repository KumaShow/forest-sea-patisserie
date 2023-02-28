<template>
  <section class="Products container py-11">
    <div class="row">
      <AsideProductMenu class="col-md-3" />
      <main class="col-md-9">
        <div class="container">
          <h2 class="mb-9 font-serif">產品頁面</h2>
          <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <li class="col" v-for="product in products" :key="product.id">
              <RouterLink :to="`/product/${product.id}`">
                <div class="card">
                  <div class="overflow-hidden">
                    <img
                      :src="product.imageUrl"
                      class="object-cover img-scale w-100"
                      alt="甜點"
                      style="height: 200px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-3">
                      <span
                        class="fs-8 py-1 px-2 me-3 bg-secondary text-white rounded-1"
                        >彌月禮盒</span
                      >
                      <span
                        class="fs-8 py-1 px-2 bg-secondary text-white rounded-1"
                        >本月限定</span
                      >
                    </div>
                    <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                      {{ product.title }}
                    </h5>
                    <p class="card-text text-primary fs-5 mb-6">NT$ 280</p>
                    <a href="#" class="btn btn-outline-primary w-100"
                      >加入購物車</a
                    >
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </main>
    </div>
    <ThePagination class="mt-10" @get-data="getProducts" :pages="pagination" />
  </section>
  <RouterView />
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProductStore from "@/stores/useProductStore";
import ThePagination from "@/components/ThePagination.vue";
import AsideProductMenu from "@/components/frontend/AsideProductMenu.vue";

export default {
  components: {
    ThePagination,
    AsideProductMenu,
  },
  computed: {
    ...mapState(useProductStore, ["products", "loadingItem", "pagination"]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "getProducts",
      "getProductDetail",
      "addToCart",
    ]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped></style>
