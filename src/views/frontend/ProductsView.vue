<template>
  <main class="container py-11 main-height">
    <div class="row">
      <!-- 側邊產品類別選單 -->
      <AsideProductMenu class="col-md-3 d-none d-md-block" />
      <main class="col-md-9">
        <div class="container">
          <h2 class="mb-9 font-serif text-center text-md-start">
            {{ category ? category : "全部商品" }}
          </h2>
          <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-8">
            <li class="col" v-for="product in products" :key="product.id">
              <RouterLink :to="`/product/${product.id}`" class="product-link">
                <div class="card hover-shadow box-shadow-3">
                  <div class="overflow-hidden product-img">
                    <img
                      v-lazy="product.imageUrl"
                      class="object-cover w-100"
                      alt="甜點"
                      style="height: 200px"
                    />
                    <span
                      v-if="product.is_limited"
                      class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 tag-limited"
                      >本月限定</span
                    >
                  </div>
                  <div class="card-body">
                    <div
                      class="mb-3 d-flex align-items-center justify-content-between"
                    >
                      <span
                        class="fs-8 py-1 px-2 me-3 bg-secondary text-white rounded-1"
                        >{{ product.category }}</span
                      >
                      <button
                        type="button"
                        class="btn border-0 p-0 btn-favorite"
                        @click.prevent="toggleFavorite(product.id)"
                        @mouseover="isFavoriteHover[product.id] = true"
                        @mouseout="isFavoriteHover[product.id] = false"
                      >
                        <span
                          class="material-symbols-outlined text-secondary d-flex"
                          :class="{
                            'material-fill': isFavoriteHover[product.id],
                          }"
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                    <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                      {{ product.title }}
                    </h5>
                    <div class="d-flex">
                      <p
                        v-if="product.price === product.origin_price"
                        class="card-text text-primary fs-5 mb-6"
                      >
                        NT$ {{ product.price }}
                      </p>
                      <div v-else>
                        <p class="card-text text-primary fs-5 mb-6">
                          NT$ {{ product.price }}
                          <del class="fs-8 ms-1 text-neutral-500"
                            >NT$ {{ product.origin_price }}</del
                          >
                        </p>
                      </div>
                    </div>
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
  data() {
    return {
      // 使用物件存 id 的方式，避免 hover 引響其他產品
      isFavoriteHover: {},
    };
  },
  computed: {
    ...mapState(useProductStore, [
      "products",
      "loadingItem",
      "pagination",
      "category",
    ]),
  },
  watch: {
    // 類別改變時抓取相應產品
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

    toggleFavorite(id) {
      // 獲取我的最愛陣列
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // 如果該產品ID不在我的最愛陣列中，則將其添加到陣列中
      if (!favorites.includes(id)) {
        favorites.push(id);
        // 將我的最愛陣列存儲到localStorage中
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    },
  },
  mounted() {
    this.getProducts();
    this.getProductsAll();
  },
};
</script>
