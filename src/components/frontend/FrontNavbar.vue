<template>
  <header class="header" :class="headerClass" ref="header">
    <nav class="navbar navbar-expand-lg py-4 navbar-light bg-inherit">
      <div class="container d-flex justify-content-between">
        <h1 class="me-3">
          <RouterLink to="/" class="logo">
            森海 Forest Sea Patisserie
          </RouterLink>
        </h1>

        <div class="d-flex ms-auto d-lg-none">
          <!-- 手機 搜尋按鈕 -->
          <button
            class="bg-transparent border-0 me-6 text-white d-flex"
            type="button"
            @click="isInputSearchPhoneShow = !isInputSearchPhoneShow"
          >
            <span class="material-symbols-outlined hover-text-secondary-200">
              search
            </span>
          </button>
          <!-- 手機 購物車按鈕 -->
          <button
            class="bg-transparent border-0 me-6 text-white d-flex position-relative"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="getCarts"
          >
            <span
              class="material-symbols-outlined hover-text-secondary-200"
              :class="{ 'material-fill': cart.carts.length }"
            >
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
            <!-- <li class="nav-item me-8 border-bottom border-bottom-lg-0">
              <RouterLink
                to="/about"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >關於我們</RouterLink
              >
            </li> -->
            <li class="nav-item me-8 border-bottom border-bottom-lg-0">
              <RouterLink
                to="/faq"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >常見問題</RouterLink
              >
            </li>
            <li class="nav-item me-8">
              <RouterLink
                to="/favorite"
                class="py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7"
                exact-active-class="link-active"
                >我的最愛</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- icon PC 樣式 -->
        <ul class="d-none d-lg-flex align-items-center ms-auto">
          <!-- 搜尋按鈕 -->
          <li>
            <form
              class="d-flex align-items-center position-relative"
              @submit.prevent="searchProduct"
            >
              <!-- PC 樣式輸入框 -->
              <input
                v-if="!isMobile"
                :class="{ 'd-none': !isInputSearchShow }"
                class="form-control me-2 py-2 px-4 rounded-1 search-input-pc"
                type="text"
                ref="btnSearch"
                placeholder="找甜點"
                aria-label="Search"
                v-model.lazy="searchTerm"
              />
              <!-- 搜尋按鈕 -->
              <button
                class="bg-transparent border-0 me-6 text-white d-flex"
                type="button"
                @click="isInputSearchShow = !isInputSearchShow"
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
              <span
                class="material-symbols-outlined hover-text-secondary-200"
                :class="{ 'material-fill': cart.carts.length }"
              >
                shopping_cart
              </span>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                v-show="!isCartEmpty"
              >
                {{ cart.carts.length }}
                <span class="visually-hidden">
                  購物車產品數:{{ cart.carts.length }}
                </span>
              </span>
            </button>
          </li>
          <!-- 我的最愛按鈕 -->
          <li class="d-none d-md-block">
            <RouterLink
              to="/favorite"
              class="bg-transparent text-white d-flex position-relative"
            >
              <span
                class="material-symbols-outlined hover-text-secondary-200"
                :class="{ 'material-fill': favorites.length }"
              >
                favorite
              </span>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                v-show="favorites.length"
              >
                {{ favorites.length }}
                <span class="visually-hidden">
                  我的最愛數量:{{ favorites.length }}
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
        <!-- 手機搜尋樣式 -->
        <div
          class="search-input-phone"
          :class="{ 'd-none': !isInputSearchPhoneShow }"
        >
          <form
            class="container position-relative"
            @submit.prevent="searchProduct"
          >
            <input
              id="searchInputPhone"
              type="text"
              class="container bg-transparent py-2 px-4 rounded-1 border-white border-opacity-50 text-white text-opacity-80"
              placeholder="找甜點"
              v-model.lazy="searchTerm"
            />
            <label
              for="searchInputPhone"
              class="text-white fw-bold"
              @click="searchProduct"
            >
              搜尋
            </label>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- 購物車列表 offcanvas -->
  <CartListOffcanvas />
</template>

<script>
import Collapse from "bootstrap/js/dist/collapse";
import CartListOffcanvas from "@/components/frontend/CartListOffcanvas.vue";
import useCartStore from "@/stores/useCartStore";
import useProductStore from "@/stores/useProductStore";
import useScrollStore from "@/stores/useScrollStore";
import { mapActions, mapState } from "pinia";

export default {
  components: { CartListOffcanvas },
  props: ["isMobile"],
  data() {
    return {
      isHomeRoute: true,
      isInputSearchShow: false,
      isInputSearchPhoneShow: false,
      isCartEmpty: true,
      isCollapseOpen: false,
      collapse: null,
      searchTerm: "",
      headerClass: "",
      lastScrollTime: 0,
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useProductStore, ["productsAll", "favorites"]),
    ...mapState(useScrollStore, ["scrollPosition", "isNewsPosition"]),
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
      this.isInputSearchShow = false;
      this.isInputSearchPhoneShow = false;
      this.searchTerm = "";
    },

    "$route.name"(newVal) {
      this.isHomeRoute = newVal === "home";
      this.updateHeaderClass();
    },

    isNewsPosition() {
      this.updateHeaderClass();
    },

    isInputSearchPhoneShow() {
      this.updateHeaderClass();
    },

    isInputSearchShow() {
      // 因為 d-none 切換時會抓不到 DOM，所以使用 setTimeout
      setTimeout(() => {
        this.$refs.btnSearch.focus();
      }, 0);
    },
  },
  methods: {
    ...mapActions(useCartStore, ["getCarts"]),
    ...mapActions(useProductStore, ["getProductsAll", "setQuery"]),
    ...mapActions(useScrollStore, ["setScrollPosition"]),

    // 搜尋商品
    searchProduct() {
      this.$router.push({
        path: "/search",
      });
      this.setQuery(this.searchTerm);
    },

    handleScroll() {
      this.setScrollPosition(window.scrollY);
    },

    /* 在首頁時會判斷滾動位置及 menu 開合狀態，設定 header 樣式 */
    updateHeaderClass() {
      if (this.isHomeRoute) {
        if (this.isCollapseOpen || this.isInputSearchPhoneShow) {
          this.headerClass = "bg-primary bg-opacity-100";
        } else {
          this.headerClass = this.isNewsPosition ? "bg-primary" : "bg-white";
        }
      } else {
        this.headerClass = "bg-primary";
      }

      this.headerClass += " " + (this.isHomeRoute ? "fixed-top" : "sticky-top");

      if (this.isHomeRoute && !this.isNewsPosition) {
        this.headerClass += " bg-opacity-10";
      }
    },

    toggleCollapse() {
      if (!this.isCollapseOpen) {
        this.isCollapseOpen = true;
        this.updateHeaderClass();
      } else {
        this.isCollapseOpen = false;
        this.updateHeaderClass();
      }
      this.collapse.toggle();
    },

    closeCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.isHomeRoute = this.$route.name === "home";
    this.updateHeaderClass();
    this.getProductsAll();
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
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
  bottom: -73px;
  left: 0;
  right: 0;
  padding: 16px;
  background-color: $primary;
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

.link-active {
  @include respond-min(md) {
    border-bottom: 3px solid #fff;
    transition: 0.3s;
  }
}
</style>
