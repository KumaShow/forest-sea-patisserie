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
          <!-- 單一產品頁面顯示品名 -->
          <li class="breadcrumb-item" v-if="this.$route.name === 'product'">
            <a href="#" class="text-gray-500" @click.prevent>
              {{ product.title }}
            </a>
          </li>
          <!-- 活動文章頁面顯示標題 -->
          <li class="breadcrumb-item" v-if="this.$route.name === 'article'">
            <a href="#" class="text-gray-500" @click.prevent>
              {{ article.title }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useProductStore from "@/stores/ProductStore";
import useArticleStore from "@/stores/ArticleStore";

export default {
  data() {
    return {
      breadcrumbList: [],
    };
  },
  computed: {
    ...mapState(useProductStore, ["product"]),
    ...mapState(useArticleStore, ["article"]),
  },
  watch: {
    $route() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
  methods: {
    ...mapActions(useProductStore, ["getProduct"]),
    ...mapActions(useArticleStore, ["getArticle"]),
  },
  mounted() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
  },
};
</script>
