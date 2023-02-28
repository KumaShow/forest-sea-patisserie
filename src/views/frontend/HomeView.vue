<!-- TODO: 圖片壓縮 -->
<template>
  <main v-if="this.$route.path === '/'">
    <!-- banner -->
    <section class="section-banner">
      <div class="text-center">
        <h2 class="display-3 font-serif text-white mb-2">
          穿梭於森林、悠遊於深海
        </h2>
        <h2 class="text-white text-opacity-80 mb-10">
          讓我們一起享受自在浪漫的甜點吧!
        </h2>
        <RouterLink
          to="/products"
          class="btn btn-outline-light hover-bg-secondary-200 px-10 py-4"
          >立即選購</RouterLink
        >
      </div>
      <div class="section-banner-more text-center">
        <img src="@/assets/images/readMoreArrow.png" alt="往下閱讀更多" />
        <p class="text-white mt-6">閱讀更多</p>
      </div>
    </section>
    <!-- 最新消息 -->
    <!-- TODO: 圖片樣式修改 -->
    <section class="section-news bg-primary-dark py-16">
      <div class="container">
        <div class="news-content row">
          <div class="col-6">
            <img
              class="w-100"
              src="@/assets/images/news.png"
              alt="最新消息圖片"
            />
          </div>
          <div class="col-6 text-white">
            <div class="text-center mb-10">
              <h2 class="font-serif">最新消息</h2>
              <img src="@/assets/images/header_line.svg" alt="" />
            </div>
            <ul class="px-9">
              <li class="py-9 border-white border-bottom border-opacity-50">
                <div class="d-flex align-items-center mb-2">
                  <span class="fs-8 py-1 px-2 me-6 bg-secondary rounded-1"
                    >本月限定</span
                  >
                  <p class="text-white text-opacity-80">12月 5日 2022</p>
                </div>
                <h3 class="text-truncate fs-4">
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
    <section class="section-hot py-16 bg-secondary-100">
      <div class="container">
        <div class="text-center mb-15">
          <h2 class="font-serif">熱門商品</h2>
          <img src="@/assets/images/header_line.svg" alt="" />
        </div>
        <ProductsCarousel />
      </div>
    </section>
    <!-- 實體店面 -->
    <section class="section-store my-16">
      <div class="container">
        <div class="text-center mb-15">
          <h2 class="text-center font-serif">實體店面</h2>
          <img src="@/assets/images/header_line.svg" alt="" />
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 lh-sm">
            <div class="ms-11">
              <h3 class="mb-2 text-neutral-900 fs-2">台南本店</h3>
              <p class="text-neutral-700 fs-5 mb-9">台南市中西區友愛街105號</p>
              <!-- 本月公休 -->
              <div class="d-flex align-items-center mb-9">
                <h4 class="me-6 fs-7 text-neutral-900">本月公休：</h4>
                <ul class="d-flex">
                  <li
                    class="me-6 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary"
                    style="height: 32px; width: 32px"
                  >
                    6
                  </li>
                  <li
                    class="me-6 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary"
                    style="height: 32px; width: 32px"
                  >
                    13
                  </li>
                  <li
                    class="me-6 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary"
                    style="height: 32px; width: 32px"
                  >
                    19
                  </li>
                  <li
                    class="me-6 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary"
                    style="height: 32px; width: 32px"
                  >
                    20
                  </li>
                  <li
                    class="me-6 border border-secondary d-flex justify-content-center align-items-center rounded-1 text-secondary"
                    style="height: 32px; width: 32px"
                  >
                    27
                  </li>
                </ul>
              </div>
              <!-- 連絡電話 -->
              <div class="d-flex align-items-center text-neutral-900 mb-9">
                <h4 class="me-6 fs-7">連絡電話：</h4>
                <a href="tel:+886-62111891" class="link-neutral-900">
                  06 - 2111891
                </a>
              </div>
              <!-- 營業時間： -->
              <div class="d-flex align-items-center text-neutral-900">
                <h4 class="me-6 fs-7">營業時間：</h4>
                <p>週一至週日12:00 - 19:00 (週二除外)</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- TODO: 串接 Map -->
            <img src="@/assets/images/map.png" alt="" class="w-100" />
          </div>
        </div>
      </div>
    </section>
    <!-- 訂閱消息 -->
    <section class="section-subscribe bg-primary-dark py-16">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="text-white mb-1">訂閱優惠訊息</h2>
            <p class="text-white opacity-80 mb-8">
              立即訂閱，取得最新折扣優惠碼
            </p>
            <div>
              <input
                type="email"
                class="rounded-1 p-4 w-75 me-2"
                placeholder="請輸入信箱"
              />
              <button
                type="button"
                class="btn btn-secondary py-4 px-10 text-white fw-semibold"
              >
                訂閱
              </button>
            </div>
          </div>
          <div class="col-lg-6 text-end">
            <div class="">
              <img
                src="@/assets/images/logo.svg"
                style="width: 120px; height: auto"
                class="mb-8"
                alt="Logo"
              />
              <ul class="d-flex justify-content-end mb-8">
                <li>
                  <a
                    href="https://www.facebook.com/ForestSeaPatisserie"
                    class="me-11"
                    >FB</a
                  >
                </li>
                <li>
                  <a
                    href="https://page.line.me/?accountId=033evgma"
                    class="me-11"
                    >Line</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/patisserie_forest_sea/?igshid=ebj7xy2g2aa1"
                    >IG</a
                  >
                </li>
              </ul>
              <ul class="d-flex justify-content-end">
                <li class="me-9 me-lg-8">
                  <RouterLink to="products">商品一覽</RouterLink>
                </li>
                <li class="me-9 me-lg-8">
                  <RouterLink to="news">最新消息</RouterLink>
                </li>
                <li class="me-9 me-lg-8">
                  <RouterLink to="about">關於我們</RouterLink>
                </li>
                <li><RouterLink to="faq">常見問題</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- <TheToolBox /> -->
</template>

<script>
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";
// import TheToolBox from "@/components/TheToolBox.vue";

export default {
  components: {
    ProductsCarousel,
    // TheToolBox,
  },
};
</script>

<style lang="scss" scoped>
.section-banner {
  min-height: 85vh;
  background-image: url("@/assets/images/landing.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &-more {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
  }
}

.section-hot {
  background-image: url("@/assets/images/Noise\ &\ Texture.png");
}

.section-subscribe {
  background-image: url("@/assets/images/subscribe.png");
  background-size: cover;
  background-position: center;
  opacity: 0.65;
}
</style>
