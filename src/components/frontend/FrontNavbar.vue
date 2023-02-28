<!-- 
  TODO: 將 header 設置透明，捲到第二個 section 變色
  TODO: 排版未完成 justify between
  TODO: 搜尋欄位
-->
<template>
  <header class="header sticky-top bg-primary">
    <nav class="navbar navbar-expand-lg py-4 navbar-light">
      <div class="container d-flex justify-content-between">
        <h1 class="me-3">
          <RouterLink to="/" class="logo"
            >森海 Forest Sea Patisserie</RouterLink
          >
        </h1>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item me-8 active">
              <RouterLink to="/">首頁</RouterLink>
            </li>
            <li class="nav-item me-8">
              <RouterLink to="/products">商品一覽</RouterLink>
            </li>
            <li class="nav-item me-8">
              <RouterLink to="/news">最新消息</RouterLink>
            </li>
            <li class="nav-item me-8">
              <RouterLink to="/about">關於我們</RouterLink>
            </li>
            <li class="nav-item me-8">
              <RouterLink to="/faq">常見問題</RouterLink>
            </li>
          </ul>
        </div>

        <ul class="d-flex align-items-center">
          <li>
            <form class="d-flex align-items-center position-relative">
              <input
                :class="inputClass"
                class="form-control me-2 py-2 px-4 rounded-1 search-input"
                type="search"
                ref="btnSearch"
                placeholder="找甜點"
                aria-label="Search"
              />
              <button
                class="bg-transparent border-0 me-6 text-white d-flex"
                type="button"
                @click="searchProduct"
              >
                <span
                  class="material-symbols-outlined hover-text-secondary-200"
                >
                  search
                </span>
              </button>
            </form>
          </li>
          <li>
            <button
              class="bg-transparent border-0 me-6 text-white d-flex"
              type="button"
            >
              <span class="material-symbols-outlined hover-text-secondary-200">
                shopping_cart
              </span>
            </button>
          </li>
          <li>
            <RouterLink to="/favorite" class="bg-transparent text-white d-flex">
              <span class="material-symbols-outlined hover-text-secondary-200">
                favorite
              </span>
            </RouterLink>
          </li>
        </ul>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isInputSearchShow: false,
      inputClass: {
        "opacity-0": true,
        "width-0": true,
      },
    };
  },
  methods: {
    searchProduct() {
      if (!this.isInputSearchShow) {
        this.isInputSearchShow = true;
        this.inputClass["opacity-0"] = false;
        this.inputClass["width-0"] = false;
      } else {
        this.isInputSearchShow = false;
        this.inputClass["opacity-0"] = true;
        this.inputClass["width-0"] = true;
      }
      this.$refs.btnSearch.focus();
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 64px;
}
.logo {
  background-image: url(@/assets/images/logo.svg);
  width: 80px;
  height: 40px;
  display: block;
  /* 圖片取代文字 */
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}

.search-input {
  width: 200px;
  position: absolute;
  left: -216px;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
