<!-- 
  TODO: 樣式微調
-->
<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
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
    <swiper-slide>
      <li class="col">
        <RouterLink :to="`/product/id`" class="">
          <div class="card box-shadow-3">
            <div class="position-relative">
              <span
                class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 position-absolute"
                >本月限定</span
              >
            </div>
            <div class="overflow-hidden">
              <img
                src="@/assets/images/products/dessert1.png"
                class="object-cover w-100 card-img"
                alt="甜點"
              />
            </div>
            <div
              class="card-body p-6 p-md-5 p-lg-6 d-flex flex-column justify-content-between"
            >
              <div>
                <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                  可麗露 焦糖原味
                </h5>
                <span
                  class="fs-8 my-4 my-md-1 py-1 px-2 bg-secondary text-white rounded-1 d-inline-block"
                  >可麗露</span
                >
                <!-- <div class="my-8 d-flex justify-content-between align-items-center"> -->
                <p class="card-text text-primary fs-5 mb-4 mb-md-2">
                  <del class="me-2 fs-6 text-neutral-500">NT$ 70</del>NT$ 65
                </p>
                <!-- </div> -->
              </div>
              <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
            </div>
          </div>
        </RouterLink>
      </li>
    </swiper-slide>

    <swiper-slide>
      <li class="col">
        <div class="card box-shadow-3 hover-float-z">
          <div class="position-relative">
            <span
              class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 position-absolute"
              >本月限定</span
            >
          </div>
          <div class="overflow-hidden">
            <img
              src="@/assets/images/products/dessert2.png"
              class="object-cover w-100 card-img"
              alt="甜點"
            />
          </div>
          <div
            class="card-body p-6 p-md-5 p-lg-6 d-flex flex-column justify-content-between"
          >
            <div>
              <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                可麗露 焦糖原味
              </h5>
              <span
                class="fs-8 my-4 my-md-1 py-1 px-2 bg-secondary text-white rounded-1 d-inline-block"
                >可麗露</span
              >
              <!-- <div class="my-8 d-flex justify-content-between align-items-center"> -->
              <p class="card-text text-primary fs-5 mb-4 mb-md-2">
                <del class="me-2 fs-6 text-neutral-500">NT$ 70</del>NT$ 65
              </p>
              <!-- </div> -->
            </div>
            <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
          </div>
        </div>
      </li>
    </swiper-slide>

    <swiper-slide>
      <li class="col">
        <div class="card box-shadow-3 hover-float-z">
          <div class="position-relative">
            <span
              class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 position-absolute"
              >本月限定</span
            >
          </div>
          <div class="overflow-hidden">
            <img
              src="@/assets/images/products/dessert2.png"
              class="object-cover w-100 card-img"
              alt="甜點"
            />
          </div>
          <div
            class="card-body p-6 p-md-5 p-lg-6 d-flex flex-column justify-content-between"
          >
            <div>
              <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                可麗露 焦糖原味
              </h5>
              <span
                class="fs-8 my-4 my-md-1 py-1 px-2 bg-secondary text-white rounded-1 d-inline-block"
                >可麗露</span
              >
              <!-- <div class="my-8 d-flex justify-content-between align-items-center"> -->
              <p class="card-text text-primary fs-5 mb-4 mb-md-2">
                <del class="me-2 fs-6 text-neutral-500">NT$ 70</del>NT$ 65
              </p>
              <!-- </div> -->
            </div>
            <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
          </div>
        </div>
      </li>
    </swiper-slide>

    <swiper-slide>
      <li class="col">
        <div class="card box-shadow-3 hover-float-z">
          <div class="position-relative">
            <span
              class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 position-absolute"
              >本月限定</span
            >
          </div>
          <div class="overflow-hidden">
            <img
              src="@/assets/images/products/dessert3.png"
              class="object-cover w-100 card-img"
              alt="甜點"
            />
          </div>
          <div
            class="card-body p-6 p-md-5 p-lg-6 d-flex flex-column justify-content-between"
          >
            <div>
              <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                可麗露 焦糖原味
              </h5>
              <span
                class="fs-8 my-4 my-md-1 py-1 px-2 bg-secondary text-white rounded-1 d-inline-block"
                >可麗露</span
              >
              <!-- <div class="my-8 d-flex justify-content-between align-items-center"> -->
              <p class="card-text text-primary fs-5 mb-4 mb-md-2">
                <del class="me-2 fs-6 text-neutral-500">NT$ 70</del>NT$ 65
              </p>
              <!-- </div> -->
            </div>
            <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
          </div>
        </div>
      </li>
    </swiper-slide>

    <swiper-slide>
      <li class="col">
        <div class="card box-shadow-3 hover-float-z">
          <div class="position-relative">
            <span
              class="fs-8 py-1 px-2 bg-secondary text-white rounded-1 position-absolute"
              >本月限定</span
            >
          </div>
          <div class="overflow-hidden">
            <img
              src="@/assets/images/products/dessert4.png"
              class="object-cover w-100 card-img"
              alt="甜點"
            />
          </div>
          <div
            class="card-body p-6 p-md-5 p-lg-6 d-flex flex-column justify-content-between"
          >
            <div>
              <h5 class="card-title fs-5 text-neutral-900 text-truncate">
                可麗露 焦糖原味
              </h5>
              <span
                class="fs-8 my-4 my-md-1 py-1 px-2 bg-secondary text-white rounded-1 d-inline-block"
                >可麗露</span
              >
              <!-- <div class="my-8 d-flex justify-content-between align-items-center"> -->
              <p class="card-text text-primary fs-5 mb-4 mb-md-2">
                <del class="me-2 fs-6 text-neutral-500">NT$ 70</del>NT$ 65
              </p>
              <!-- </div> -->
            </div>
            <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
          </div>
        </div>
      </li>
    </swiper-slide>
  </swiper>
  <div class="swiper-pagination"></div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
    };
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
