<!-- 
  TODO: 將 header 設置透明，捲到第二個 section 變色
  TODO: 排版未完成 justify between
  TODO: 搜尋欄位
-->
<template>
  <header class="header sticky-top">
    <nav class="navbar navbar-expand-lg py-4 navbar-light bg-primary">
      <div class="container d-flex justify-content-between">
        <h1 class="me-3">
          <RouterLink to="/" class="logo"
            >森海 Forest Sea Patisserie</RouterLink
          >
        </h1>

        <div class="d-flex ms-auto d-lg-none">
          <!-- icon 手機 樣式 -->
          <form class="d-flex align-items-center position-relative">
            <input
              :class="inputClass"
              class="form-control me-2 py-2 px-4 rounded-1 search-input-pc"
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
              <span class="material-symbols-outlined hover-text-secondary-200">
                search
              </span>
            </button>
          </form>
          <!-- 購物車按鈕 -->
          <button
            class="bg-transparent border-0 me-6 text-white d-flex position-relative"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="getCarts"
          >
            <span class="material-symbols-outlined hover-text-secondary-200">
              shopping_cart
            </span>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
              v-show="!isCartEmpty"
            >
              {{ cart.carts.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>

        <!-- 手機漢堡選單按鈕 -->
        <button
          class="navbar-toggler border-0 rounded-0"
          type="button"
          @click="toggleCollapse"
        >
          <span
            class="material-symbols-outlined text-white hover-text-secondary-200"
          >
            menu
          </span>
        </button>
        <!-- 導航連結 摺疊 -->
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarLinkContent"
          ref="collapse"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item me-8 d-none d-lg-block">
              <RouterLink to="/" class="p-2" exact-active-class="link-active"
                >首頁</RouterLink
              >
            </li>
            <li class="nav-item me-8 border-bottom border-bottom-lg-0">
              <RouterLink
                to="/products"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >商品一覽</RouterLink
              >
            </li>
            <li class="nav-item me-8 border-bottom border-bottom-lg-0">
              <RouterLink
                to="/news"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >最新消息</RouterLink
              >
            </li>
            <li class="nav-item me-8 border-bottom border-bottom-lg-0">
              <RouterLink
                to="/about"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >關於我們</RouterLink
              >
            </li>
            <li class="nav-item me-8">
              <RouterLink
                to="/faq"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >常見問題</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- icon PC 樣式 -->
        <ul class="d-none d-lg-flex align-items-center ms-auto">
          <!-- 搜尋功能 -->
          <li>
            <form class="d-flex align-items-center position-relative">
              <!-- PC 樣式輸入框 -->
              <input
                v-if="!isMobile"
                :class="inputClass"
                class="form-control me-2 py-2 px-4 rounded-1 search-input-pc"
                type="search"
                ref="btnSearch"
                placeholder="找甜點"
                aria-label="Search"
              />
              <!-- 搜尋按鈕 -->
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
          <!-- 購物車按鈕 -->
          <li>
            <button
              class="bg-transparent border-0 me-6 text-white d-flex position-relative"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              @click="getCarts"
            >
              <span class="material-symbols-outlined hover-text-secondary-200">
                shopping_cart
              </span>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                v-show="!isCartEmpty"
              >
                {{ cart.carts.length }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>
          <!-- 我的最愛按鈕 -->
          <li class="d-none d-md-block">
            <RouterLink to="/favorite" class="bg-transparent text-white d-flex">
              <span class="material-symbols-outlined hover-text-secondary-200">
                favorite
              </span>
            </RouterLink>
          </li>
        </ul>
        <!-- 手機搜尋樣式 -->
        <!-- <div class="bg-primary-dark"> -->
        <div
          class="search-input-phone"
          :class="{ 'd-none': !isInputSearchPhoneShow }"
        >
          <div class="container position-relative">
            <input
              id="searchInputPhone"
              type="text"
              class="container bg-transparent py-2 px-4 rounded-1 border-white border-opacity-50 text-white text-opacity-80"
              placeholder="找甜點"
            />
            <label for="searchInputPhone" class="text-white fw-bold"
              >搜尋</label
            >
          </div>
        </div>
      </div>
      <!-- </div> -->
    </nav>
  </header>
  <!-- 購物車列表 offcanvas -->
  <CartListOffcanvas />
</template>

<script>
import Collapse from "bootstrap/js/dist/collapse";
import CartListOffcanvas from "@/components/frontend/CartListOffcanvas.vue";
import useCartStore from "@/stores/useCartStore";
import { mapActions, mapState } from "pinia";

export default {
  components: { CartListOffcanvas },
  props: ["isMobile"],
  data() {
    return {
      isInputSearchShow: false,
      inputClass: {
        "opacity-0": true,
        "width-0": true,
      },
      isInputSearchPhoneShow: false,
      isCartEmpty: true,
      collapse: null,
      isCollapseOpen: false,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
  },
  watch: {
    cart() {
      if (this.cart?.carts?.length) {
        this.isCartEmpty = false;
      } else {
        this.isCartEmpty = true;
      }
    },
    $route() {
      this.closeCollapse();
    },
  },
  methods: {
    ...mapActions(useCartStore, ["getCarts"]),

    // 搜尋
    searchProduct() {
      // 當設備為手機時
      if (this.isMobile) {
        if (this.isInputSearchPhoneShow) {
          this.isInputSearchPhoneShow = false;
        } else {
          this.isInputSearchPhoneShow = true;
        }
        // 當設備為 PC 時
      } else if (!this.isMobile) {
        if (!this.isInputSearchShow) {
          this.isInputSearchShow = true;
          this.inputClass = {
            "opacity-0": false,
            "width-0": false,
          };
        } else {
          this.isInputSearchShow = false;
          this.inputClass = {
            "opacity-0": true,
            "width-0": true,
          };
        }
        this.$refs.btnSearch.focus();
      }
    },

    toggleCollapse() {
      this.collapse.toggle();
    },

    closeCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>
<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";
@import "@/assets/stylesheets/helpers/mixin.scss";

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
/* PC的搜尋樣式 */
.search-input-pc {
  width: 200px;
  position: absolute;
  left: -216px;
}
/* 手機的搜尋樣式 */
.search-input-phone {
  @include respond-min(lg) {
    display: none;
  }
  position: absolute;
  bottom: -75px;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: $primary-dark;
  text-align: center;
  animation: moveFromLeft 0.3s ease;

  input:focus-visible {
    outline-color: $dark;
  }

  label {
    color: #fff;
    font-weight: bold;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}

.link-active {
  @include respond-min(md) {
    border-bottom: 3px solid #fff;
    transition: 0.3s;
  }
}
// .navbar-collapse.show {
//   background-color: $primary-dark;
//   position: absolute;
//   bottom: -230px;
//   left: 0;
//   right: 0;
//   padding-left: 12px;
//   padding-right: 12px;
// }
</style>
