<template>
  <main class="container py-11 main-height">
    <div class="row">
      <AsideProductMenu class="col-md-3" />
      <main class="col-md-9">
        <div class="container">
          <h2 class="mb-9 font-serif">
            {{ category ? category : "全部商品" }}
          </h2>
          <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-8">
            <li class="col" v-for="product in products" :key="product.id">
              <RouterLink :to="`/product/${product.id}`" class="product-link">
                <div class="card hover-shadow">
                  <div class="overflow-hidden product-img">
                    <img
                      v-lazy="product.imageUrl"
                      class="object-cover w-100"
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
                    <p class="card-text text-primary fs-5 mb-6">
                      NT$ {{ product.price }}
                    </p>
                    <button
                      type="button"
                      class="btn btn-outline-primary w-100"
                      @click.prevent="addToCart(product.id)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </main>
    </div>
    <ThePagination class="mt-10" @get-data="getProducts" :pages="pagination" />
  </main>
  <RouterView />
  <TheLoading />
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProductStore from "@/stores/useProductStore";
import ThePagination from "@/components/ThePagination.vue";
import TheLoading from "@/components/TheLoading.vue";
import AsideProductMenu from "@/components/frontend/AsideProductMenu.vue";

export default {
  components: {
    ThePagination,
    AsideProductMenu,
    TheLoading,
  },
  computed: {
    ...mapState(useProductStore, [
      "products",
      "loadingItem",
      "pagination",
      "category",
    ]),

    // // 根據類別篩選對應產品
    // filteredProducts() {
    //   if (this.category === "") {
    //     return this.products;
    //   } else {
    //     return this.products.filter((product) =>
    //       product.category.match(this.category)
    //     );
    //   }
    // },
  },
  watch: {
    category() {
      this.getProducts();
    },
  },
  methods: {
    ...mapActions(useProductStore, [
      "getProducts",
      "getProductsAll",
      "addToCart",
    ]),
  },
  mounted() {
    this.getProducts();
    this.getProductsAll();
  },
};
</script>

<style lang="scss" scoped>
.product-img {
  position: relative;

  &::after {
    content: "查看商品";
    color: #fff;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%); // hover 前的位置
    text-align: center;
    font-size: 1.7rem;
    opacity: 0; // hover 前不可見
    transition: all 0.5s;
    backface-visibility: hidden;
  }
}

.product-link:hover {
  img {
    transition: all 0.3s ease;
    transform: scale(1.2);
    filter: brightness(60%);
  }
  .product-img::after {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
