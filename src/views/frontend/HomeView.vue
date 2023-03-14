<!-- TODO: 圖片壓縮 -->
<template>
  <main v-if="this.$route.path === '/'">
    <!-- banner -->
    <section class="section-banner">
      <div class="section-banner-content">
        <div class="text-center">
          <h2 class="fs-3 fs-md-64 font-serif text-white mb-2">
            穿梭於森林、悠遊於深海
          </h2>
          <h2 class="fs-7 fs-md-2 text-white text-opacity-80 mb-10">
            讓我們一起享受自在浪漫的甜點吧!
          </h2>
          <RouterLink
            to="/products"
            class="btn btn-outline-light hover-bg-secondary-200 px-6 px-md-10 py-2 py-md-4 rounded-1"
            >立即選購</RouterLink
          >
        </div>
      </div>
      <div class="section-banner-more text-center">
        <img
          src="@/assets/images/readMoreArrow.png"
          alt="往下閱讀更多"
          ref="readMore"
        />
        <p class="text-white mt-6">往下閱讀更多</p>
      </div>
    </section>
    <!-- 最新消息 -->
    <section
      class="section-news bg-primary-dark py-11 py-lg-16"
      ref="sectionNews"
    >
      <div class="container">
        <div class="news-content row">
          <!-- 圖片 -->
          <div class="col-lg-6 mb-8 mb-md-0">
            <div class="text-center mb-11 d-lg-none">
              <h2 class="font-serif text-white">最新消息</h2>
              <img src="@/assets/images/header_line.svg" alt="文章圖片" />
            </div>
            <div class="p-6 bg-white overflow-hidden news-img">
              <img
                class="w-100 object-cover"
                src="@/assets/images/news.png"
                alt="最新消息圖片"
              />
            </div>
          </div>
          <!-- 文章列表 -->
          <div class="col-lg-6 text-white">
            <div class="text-center d-none d-lg-block mb-10 my-md-8 mb-lg-10">
              <h2 class="font-serif">最新消息</h2>
              <img src="@/assets/images/header_line.svg" alt="" />
            </div>
            <ul class="px-md-9">
              <li class="py-9 border-white border-bottom border-opacity-50">
                <div class="d-flex align-items-center mb-2">
                  <span class="fs-8 py-1 px-2 me-6 bg-secondary rounded-1"
                    >本月限定</span
                  >
                  <p class="text-white text-opacity-80">12月 5日 2022</p>
                </div>
                <h3 class="text-truncate fs-5 fs-md-4">
                  <a href="#!">2022聖誕禮盒預約活動開始啦！</a>
                </h3>
              </li>

              <li class="py-9 border-white border-bottom border-opacity-50">
                <div class="d-flex align-items-center mb-2">
                  <span class="fs-8 py-1 px-2 me-6 bg-secondary rounded-1"
                    >活動</span
                  >
                  <p class="text-white text-opacity-80">12月 5日 2022</p>
                </div>
                <h3 class="text-truncate fs-4">
                  <a href="#!">森海在本月開始會陸續推出每月限定活動...</a>
                </h3>
              </li>
              <li class="py-9 border-white border-bottom border-opacity-50">
                <div class="d-flex align-items-center mb-2">
                  <span class="fs-8 py-1 px-2 me-6 bg-secondary rounded-1"
                    >限量</span
                  >
                  <p class="text-white text-opacity-80">12月 5日 2022</p>
                </div>
                <h3 class="text-truncate fs-4">
                  <a href="#!">出攤出攤! 台南甜點節x思味市集，活動時間 ...</a>
                </h3>
              </li>
              <li class="py-9 border-white border-bottom border-opacity-50">
                <div class="d-flex align-items-center mb-2">
                  <span class="fs-8 py-1 px-2 me-6 bg-secondary rounded-1"
                    >新品上市</span
                  >
                  <p class="text-white text-opacity-80">12月 5日 2022</p>
                </div>
                <h3 class="text-truncate fs-4">
                  <a href="#!">活動資訊</a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 熱門商品 -->
    <section class="bg-mask-texture py-11 py-lg-16 bg-secondary-100">
      <div class="container">
        <div class="text-center mb-11 mb-lg-15">
          <h2 class="font-serif">熱門商品</h2>
          <img src="@/assets/images/header_line.svg" alt="" />
        </div>
        <ProductsCarousel :props-products="filterHotProducts" />
      </div>
    </section>
    <!-- 實體店面 -->
    <section class="section-store bg-mask-texture py-11 py-lg-16">
      <div class="container">
        <div class="text-center mb-11 mb-lg-15">
          <h2 class="text-center font-serif">實體店面</h2>
          <img src="@/assets/images/header_line.svg" alt="" />
        </div>
        <div class="row align-items-center flex-row-reverse">
          <!-- 地圖 -->
          <div class="col-lg-6 mb-11 mb-lg-0">
            <div class="p-4 p-mb-6 box-shadow-1 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1405.9057743738294!2d120.19924610619928!3d22.990990325090667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77ddbb48abc9%3A0x3061313521f6ed6!2z5qOu5rW35omL5L2c55Sc6bueIEZPUkVTVCBTRUEgUEFUSVNTRVJJRQ!5e0!3m2!1szh-TW!2ssg!4v1678679733955!5m2!1szh-TW!2ssg"
                class="w-100 store-map"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <!-- 聯絡資訊 -->
          <div class="col-lg-6 lh-sm">
            <div class="ms-lg-9 ms-xl-11 text-center text-lg-start">
              <h3 class="mb-2 text-neutral-900 fs-4 fs-lg-2">台南本店</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=台南市中西區友愛街105號"
                target="_blank"
                class="text-neutral-700 fs-5 mb-9 d-block"
                >台南市中西區友愛街105號</a
              >
              <!-- 本月公休 -->
              <div class="d-lg-flex align-items-center mb-9">
                <h4 class="me-lg-6 mb-6 mb-lg-0 fs-7 text-neutral-900">
                  本月公休：
                </h4>
                <ul class="d-flex justify-content-center">
                  <li
                    v-for="day in articleDayOff"
                    :key="day"
                    class="me-5 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary box-shadow-3 bg-white"
                    style="height: 32px; width: 32px"
                  >
                    {{ day }}
                  </li>
                </ul>
              </div>
              <!-- 連絡電話 -->
              <div class="d-lg-flex align-items-center text-neutral-900 mb-9">
                <h4 class="me-lg-6 mb-6 mb-lg-0 fs-7">連絡電話：</h4>
                <a href="tel:+886-62111891" class="link-neutral-900">
                  06 - 2111891
                </a>
              </div>
              <!-- 營業時間： -->
              <div class="d-lg-flex align-items-center text-neutral-900">
                <h4 class="me-lg-6 mb-6 mb-lg-0 fs-7">營業時間：</h4>
                <p>週一至週日12:00 - 19:00 (週二除外)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
import gsap from "gsap";
import useScrollStore from "@/stores/useScrollStore";
import useCalendarStore from "@/stores/CalendarStore";
import useProductStore from "@/stores/useProductStore";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    ProductsCarousel,
  },
  props: ["isMobile"],
  data() {
    return {
      tuesdayList: [],
    };
  },
  computed: {
    ...mapState(useScrollStore, ["scrollPosition"]),
    ...mapState(useCalendarStore, ["articleDayOff"]),
    ...mapState(useProductStore, ["filterHotProducts"]),
  },
  watch: {
    scrollPosition() {
      // 當滾到 最新消息 時觸發
      if (this.scrollPosition >= this.$refs.sectionNews.offsetTop - 50) {
        this.setNewsPosition(true);
      } else {
        this.setNewsPosition(false);
      }
    },
  },
  methods: {
    ...mapActions(useScrollStore, ["setScrollPosition", "setNewsPosition"]),
    ...mapActions(useCalendarStore, ["getDayOff"]),
  },
  mounted() {
    this.getDayOff();
    const readMoreImg = this.$refs.readMore;
    gsap.to(readMoreImg, {
      y: 15,
      duration: 0.5,
      ease: "Power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/helpers/mixin.scss";

.section-banner {
  position: relative;
  min-height: 95vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    background-image: url("@/assets/images/photo.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(90%);
  }
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    position: relative;
  }

  &-more {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
  }
}

.section-news {
  .news-img img {
    height: 420px;

    @include respond-min(lg) {
      height: 720px;
    }
  }
}

.section-store {
  .store-map {
    height: 188px;

    @include respond-min(md) {
      height: 340px;
    }
  }
}
</style>
