<!-- 
  TODO:
    - sticky ?
-->
<template>
  <section class="bg-gray-200 py-4">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li
            class="breadcrumb-item"
            v-for="item in breadcrumbList"
            :key="item.name"
          >
            <RouterLink :to="{ name: item.link }" class="text-gray-500">
              {{ item.name }}
            </RouterLink>
          </li>
          <li class="breadcrumb-item" v-if="this.$route.name === 'product'">
            <a href="#" class="text-gray-500" @click.prevent>
              {{ product.title }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script>
import useProductStore from "@/stores/useProductStore";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      pathMap: [
        {
          name: "首頁",
          link: "home",
        },
        {
          name: "產品一覽",
          link: "products",
        },
        {
          name: "",
        },
      ],
      breadcrumbList: [],
    };
  },
  computed: {
    ...mapState(useProductStore, ["product"]),
  },
  watch: {
    $route() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
  methods: {
    ...mapActions(useProductStore, ["getProduct"]),
  },
  mounted() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
  },
};
</script>

<!-- export default {
  data() {
    return {
      currentRouteName: "",
      routeNameMap: {
        products: "產品一覽",
        about: "關於我們",
        news: "最新消息",
        faq: "常見問題",
      },
    };
  },
  watch: {
    $route(to) {
      this.currentRouteName = this.routeNameMap[to.name];
    },
  },
  mounted() {
    // this.path = this.$route.name;
    // console.log(this.$route.name);
  },
}; -->
