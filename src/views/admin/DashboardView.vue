<template v-if="isAdmin">
  <div class="d-flex vh-100">
    <AdminNavBar class="me-6" />
    <div class="position-relative w-100 py-10 scrollY bg-mask-texture">
      <section class="container" v-if="this.$route.path === '/admin'">
        <h2 class="text-center mb-10">後台</h2>
        <div class="row justify-content-center">
          <div class="col-7">
            <!-- 銷售類別 -->
            <div class="border rounded-4 py-6 bg-white">
              <h3 class="fs-6 mb-4 px-6">近 10 筆訂單銷售類別</h3>
              <ChartCategory ref="ChartCategory" />
            </div>
          </div>
          <div class="col-4">
            <!-- 已付款訂單營業額 -->
            <ChartTotal ref="chartTotal" />
            <!-- 未付款訂單數 -->
            <div class="border rounded-4 p-6 bg-white mt-8">
              <div class="d-flex align-items-center justify-content-between">
                <p>未付款訂單總數: {{ orderNotPaidNum }}</p>
                <button
                  @click="this.$router.push({ name: 'adminOrders' })"
                  class="btn p-0"
                  type="button"
                >
                  <span class="material-symbols-outlined d-flex">
                    more_vert
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RouterView v-if="isAdmin" />
      <TheLoading />
      <TheToastMessage />
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/admin/AdminNavBar.vue";
import TheLoading from "@/components/TheLoading.vue";
import ChartCategory from "@/components/admin/ChartCategory.vue";
import ChartTotal from "@/components/admin/ChartTotal.vue";
import TheToastMessage from "@/components/TheToastMessage.vue";
import useToastMessageStore from "@/stores/ToastMessageStore";
import useOrderStore from "@/stores/OrderStore";
import { mapActions, mapState } from "pinia";
const { VITE_API } = import.meta.env;

export default {
  components: {
    AdminNavBar,
    TheLoading,
    TheToastMessage,
    ChartCategory,
    ChartTotal,
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  computed: {
    ...mapState(useOrderStore, ["orders", "orderNotPaidNum"]),
  },
  watch: {
    orders() {
      this.getNotPaidOrders();
    },
    "$route.name"(to) {
      if (to === "admin") {
        // 使用 setTimeout 延遲更新圖表資料，否則切換路由失效
        setTimeout(() => {
          this.$refs.chartTotal.loadChart();
          this.$refs.ChartCategory.loadChart();
        }, 0);
      }
    },
  },
  mounted() {
    this.checkAdmin();
    this.getOrders();
  },
  methods: {
    ...mapActions(useToastMessageStore, ["pushMessage"]),
    ...mapActions(useOrderStore, ["getOrders", "getNotPaidOrders"]),

    checkAdmin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = `${token}`;
      const url = `${VITE_API}/api/user/check`;

      if (token) {
        this.$http
          .post(url)
          .then(() => {
            this.isAdmin = true;
          })
          .catch((err) => {
            this.pushMessage({
              style: "danger",
              title: "驗證失敗，請重新登入",
              content: `${err.response.data.message}`,
            });
            this.$router.push("/login");
          });
      } else {
        this.pushMessage({
          style: "danger",
          title: "你尚未登入，請先登入驗證",
        });
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.scrollY {
  overflow-y: scroll;
}
</style>
