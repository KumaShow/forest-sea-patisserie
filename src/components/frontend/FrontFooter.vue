<template>
  <!-- 訂閱消息 & 導航 -->
  <section class="section-subscribe bg-primary-dark py-11 py-lg-16">
    <div class="container content">
      <div class="row">
        <!-- 訂閱訊息 -->
        <div class="col-lg-6 mb-11 mb-lg-0">
          <h2 class="text-white text-center text-lg-start mb-1">
            訂閱優惠訊息
          </h2>
          <p class="text-white text-center text-lg-start opacity-80 mb-8">
            立即訂閱，取得最新折扣優惠碼
          </p>
          <div class="d-flex align-items-center justify-content-center">
            <input
              type="email"
              class="rounded-1 p-4 me-2 flex-md-fill w-auto"
              placeholder="請輸入信箱"
            />
            <div class="w-auto">
              <button
                type="button"
                class="btn btn-secondary rounded-1 py-4 px-sm-10 text-white fw-semibold"
              >
                訂閱
              </button>
            </div>
          </div>
        </div>
        <!-- 導航連結 -->
        <div class="col-lg-6 text-center text-lg-end">
          <div>
            <img
              src="@/assets/images/logo.svg"
              style="width: 120px; height: auto"
              class="mb-8"
              alt="Logo"
            />
            <!-- 社群連結 -->
            <ul
              class="d-flex justify-content-center justify-content-lg-end mb-8"
            >
              <li>
                <a
                  href="https://www.facebook.com/ForestSeaPatisserie"
                  class="me-11"
                  ><font-awesome-icon
                    class="tool-box-icon"
                    icon="fa-brands fa-facebook"
                /></a>
              </li>
              <li>
                <a href="https://page.line.me/?accountId=033evgma" class="me-11"
                  ><font-awesome-icon
                    class="tool-box-icon"
                    icon="fa-brands fa-line"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/patisserie_forest_sea/?igshid=ebj7xy2g2aa1"
                  ><font-awesome-icon
                    class="tool-box-icon"
                    icon="fa-brands fa-instagram"
                /></a>
              </li>
            </ul>
            <!-- 網站連結 -->
            <ul class="d-flex justify-content-center justify-content-lg-end">
              <li class="me-7 me-lg-8">
                <RouterLink to="products">商品一覽</RouterLink>
              </li>
              <li class="me-7 me-lg-8">
                <RouterLink to="news">最新消息</RouterLink>
              </li>
              <li class="me-7 me-lg-8">
                <RouterLink to="about">關於我們</RouterLink>
              </li>
              <li><RouterLink to="faq">常見問題</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-primary-dark text-white py-4 text-center">
    <div class="d-flex justify-content-center mb-1 fs-8">
      <p class="me-2">非官方網站僅作練習使用，無任何商業用途</p>
      <span>|</span>
      <RouterLink class="ms-2" to="/login">登入後台</RouterLink>
    </div>
    <p class="text-white-70 fs-9">森海 © 2022 Copyright | made by Benson.</p>
  </footer>
</template>

<style lang="scss">
.section-subscribe {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("@/assets/images/room.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: brightness(80%);
  }
  .content {
    position: relative;
  }
}
</style>
