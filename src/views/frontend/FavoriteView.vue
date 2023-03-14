<template>
  <div class="bg-mask-texture">
    <main class="favorite container py-11 main-height">
      <div class="row justify-content-center">
        <div class="col-10 mb-10">
          <h2 class="text-center mb-10 font-serif">我的最愛</h2>
          <!-- 沒有產品 -->
          <div v-if="!filterFavorites.length" class="text-center py-10 mb-11">
            <p class="mb-13 fs-3">目前還沒有收藏呢!</p>
            <RouterLink
              to="/products"
              class="btn btn-secondary text-white rounded-1 px-6 px-md-10 py-2 py-md-4"
            >
              找甜點去
            </RouterLink>
          </div>
          <!-- 有產品 -->
          <div v-else>
            <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-8">
              <li
                class="col"
                v-for="product in filterFavorites"
                :key="product.id"
              >
                <RouterLink :to="`/product/${product.id}`" class="product-link">
                  <div class="card hover-shadow">
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
                          @click.prevent="setFavorite(product.id)"
                          @mouseover="isFavoriteHover[product.id] = true"
                          @mouseout="isFavoriteHover[product.id] = false"
                        >
                          <span
                            class="material-symbols-outlined text-secondary"
                            :class="{
                              'material-fill': favorites.includes(product.id),
                            }"
                          >
                            favorite
                          </span>
                        </button>
                      </div>
                      <h5
                        class="card-title fs-5 text-neutral-900 text-truncate"
                      >
                        {{ product.title }}
                      </h5>
                      <p class="card-text text-primary fs-5 mb-6">
                        NT$ {{ product.price }}
                      </p>
                      <button
                        type="button"
                        class="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center py-2"
                        @click.prevent="addToCart(product.id, qty)"
                        :disabled="loadingItem === product.id"
                      >
                        <span
                          v-show="loadingItem === product.id"
                          class="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span
                          v-show="loadingItem !== product.id"
                          class="material-symbols-outlined me-2"
                        >
                          shopping_cart
                        </span>
                        加入購物車
                      </button>
                    </div>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 推薦商品 -->
      <section>
        <h3 class="mb-8">推薦商品</h3>
        <ProductsCarousel :props-products="filterHotProducts" />
      </section>
    </main>
    <TheToastMessage />
  </div>
</template>

<script>
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import TheToastMessage from "@/components/TheToastMessage.vue";
import useProductStore from "@/stores/useProductStore";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    ProductsCarousel,
    TheToastMessage,
  },
  data() {
    return {
      // 使用物件判斷 id 的方式，避免 hover 引響其他產品
      isFavoriteHover: {},
    };
  },
  computed: {
    ...mapState(useProductStore, [
      "productsAll",
      "filterHotProducts",
      "favorites",
      "filterFavorites",
      "loadingItem",
    ]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "addToCart",
      "getProducts",
      "setFavorite",
      "getFavorites",
      "getProduct",
    ]),
  },
  mounted() {
    this.getFavorites();
  },
};
</script>
