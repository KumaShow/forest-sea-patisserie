<template>
  <main class="container py-11 py-md-13 main-height">
    <div class="row">
      <!-- 側邊產品類別選單 -->
      <AsideProductMenu class="col-md-3 d-none d-md-block" />
      <main class="col-md-9">
        <div class="container">
          <div class="mb-9">
            <h2 class="mb-2 font-serif text-center text-md-start">搜尋結果</h2>
            <p class="text-neutral-500 text-center text-md-start">
              搜尋條件:
              <span class="text-primary fs-6">{{ searchTerm }}</span>
              共有 <span class="fs-6">{{ filterProductsList?.length }}</span> 筆
            </p>
          </div>
          <!-- 產品內容 -->
          <p
            v-if="filterProductsList?.length === 0"
            class="fs-2 fs-md-1 mt-md-15 text-center"
          >
            找不到商品!
          </p>
          <ul v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-8">
            <li
              class="col"
              v-for="product in filterProductsList"
              :key="product.id"
            >
              <RouterLink :to="`/product/${product.id}`" class="product-link">
                <div class="card hover-shadow">
                  <div class="overflow-hidden product-img">
                    <img
                      v-lazy="product.imageUrl"
                      class="object-cover w-100"
                      :alt="product.title"
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
                          class="material-symbols-outlined text-secondary d-flex"
                          :class="{
                            'material-fill':
                              favorites.includes(product.id) ||
                              isFavoriteHover[product.id],
                          }"
                        >
                          favorite
                        </span>
                      </button>
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
  </main>
  <RouterView />
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProductStore from "@/stores/useProductStore";
import AsideProductMenu from "@/components/frontend/AsideProductMenu.vue";

export default {
  components: {
    AsideProductMenu,
  },
  data() {
    return {
      isFavoriteHover: {},
    };
  },
  computed: {
    ...mapState(useProductStore, [
      "productsAll",
      "loadingItem",
      "pagination",
      "category",
      "searchTerm",
      "filterProductsList",
      "favorites",
    ]),
  },
  methods: {
    ...mapActions(useProductStore, ["addToCart", "setFavorite"]),
  },
};
</script>
