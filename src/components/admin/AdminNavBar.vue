<template>
  <aside class="bg-dark vh-100">
    <nav class="bg-primary h-100 row justify-content-between">
      <ul class="fs-6 pe-0">
        <li>
          <RouterLink class="p-6 d-block link-white link-hover" to="/admin">
            <img src="@/assets/images/logo.svg" alt="Logo" />
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="p-6 d-block link-white link-hover d-flex align-items-center"
            to="/"
          >
            <span class="material-symbols-outlined material-fill me-2">
              house
            </span>
            返回前台
          </RouterLink>
        </li>
        <li :class="{ 'nav-active': this.$route.name === 'adminProducts' }">
          <RouterLink
            class="p-6 d-block link-white link-hover d-flex align-items-center"
            to="/admin/products"
          >
            <span class="material-symbols-outlined material-fill me-2">
              shelf_position
            </span>
            產品管理
          </RouterLink>
        </li>
        <li :class="{ 'nav-active': this.$route.name === 'adminOrders' }">
          <RouterLink
            class="p-6 d-block link-white link-hover d-flex align-items-center"
            to="/admin/orders"
          >
            <span class="material-symbols-outlined material-fill me-2">
              order_approve
            </span>
            訂單管理
          </RouterLink>
        </li>
        <li :class="{ 'nav-active': this.$route.name === 'adminCoupon' }">
          <RouterLink
            class="p-6 d-block link-white link-hover d-flex align-items-center"
            to="/admin/coupon"
          >
            <span class="material-symbols-outlined material-fill me-2">
              redeem
            </span>
            優惠券管理
          </RouterLink>
        </li>
        <li :class="{ 'nav-active': this.$route.name === 'adminNews' }">
          <RouterLink
            class="p-6 d-block link-white link-hover d-flex align-items-center"
            to="/admin/news"
          >
            <span class="material-symbols-outlined material-fill me-2">
              article
            </span>
            文章管理
          </RouterLink>
        </li>
      </ul>
      <div class="mt-auto">
        <a
          href="#"
          class="p-6 link-white link-hover d-flex align-items-center"
          @click.prevent="logout"
        >
          <span class="material-symbols-outlined material-fill me-2">
            logout
          </span>
          登出
        </a>
      </div>
    </nav>
  </aside>
</template>

<script>
import useToastMessageStore from "@/stores/ToastMessageStore";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(useToastMessageStore, ["pushMessage"]),

    logout() {
      document.cookie = `hexToken=; expires=;`;
      this.pushMessage({
        title: "已登出",
      });
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";

.nav-active,
.nav-active:hover a {
  background-color: $secondary;
  color: white;
}
</style>
