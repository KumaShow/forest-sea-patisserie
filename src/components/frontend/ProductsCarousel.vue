<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    :pagination="{
      clickable: true,
      el: '.swiper-pagination',
    }"
    :breakpoints="{
      '576': {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="product in propsProducts" :key="product.id">
      <div class="col">
        <RouterLink :to="`/product/${product.id}`" class="product-link">
          <div class="card box-shadow-3">
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
                class="btn btn-outline-primary rounded-1 w-100 d-flex justify-content-center align-items-center py-2"
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
      </div>
    </swiper-slide>
  </swiper>
  <div v-if="$route.name !== 'home'" class="swiper-pagination"></div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import { mapActions, mapState } from "pinia";
import useProductStore from "@/stores/ProductStore";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    propsProducts: {
      type: Array,
    },
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
      isFavoriteHover: {},
    };
  },
  computed: {
    ...mapState(useProductStore, ["loadingItem", "favorites"]),
  },
  methods: {
    ...mapActions(useProductStore, ["addToCart", "setFavorite"]),
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables.scss";
@import "@/assets/stylesheets/helpers/mixin.scss";

.swiper {
  width: 100%;
  height: 400px;
}
.swiper-slide {
  .card {
    max-height: 348px;
  }

  .card-img {
    height: 171px;
  }
  @include respond-min(md) {
    .card-img {
      height: 150px;
    }
  }
  @include respond-min(lg) {
    .card-img {
      height: 180px;
    }
  }
}
// 自訂分頁樣式
.swiper-pagination-bullet {
  height: 8px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  width: 50px;
  background-color: $secondary;
  width: 16px;
  height: 8px;
}
// 讓分頁移至下方
.swiper-pagination {
  position: static;
  margin-top: 10px;
}
</style>
