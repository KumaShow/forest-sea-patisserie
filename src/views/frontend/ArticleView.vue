<template>
  <div class="bg-mask-texture">
    <main class="container py-11 main-height position-relative">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <article class="border-bottom mb-4">
            <!-- 標題 -->
            <h2 class="mb-6 font-serif">{{ article.title }}</h2>
            <!-- 作者與時間 -->
            <div class="d-flex align-items-center text-neutral-500 mb-8">
              <p class="d-flex align-items-center fs-7 me-5">
                <span class="material-symbols-outlined me-1">
                  history_edu
                </span>
                作者: {{ article.author }}
              </p>
              <span class="me-5">|</span>
              <p class="d-flex align-items-center fs-7">
                <span class="material-symbols-outlined me-1">
                  calendar_month
                </span>
                {{ createDate(article.create_at) }}
              </p>
            </div>
            <!-- 圖片 -->
            <figure class="mb-0 overflow-hidden">
              <img
                :src="article.image"
                :alt="article.title"
                class="img-fluid d-block object-cover w-100"
                style="aspect-ratio: 16/9"
              />
            </figure>
            <!-- 文章內容 -->
            <div class="my-10" v-html="article.content"></div>
            <!-- 上下篇 -->
          </article>
          <div class="row">
            <div class="col-6">
              <a
                href="#"
                @click.prevent="getPreArticle"
                class="link-article link-pre text-dark d-inline-block w-100 fs-8 fs-md-7 py-3"
                :class="{ 'd-none': !this.hasPre }"
              >
                上一篇
                <h3 class="mt-2 fs-7 text-truncate">
                  {{ this.preArticle.title }}
                </h3>
              </a>
            </div>
            <div class="col-6">
              <a
                href="#"
                @click.prevent="getNextArticle"
                class="link-article link-next text-dark d-inline-block w-100 text-end fs-8 fs-md-7 py-3"
                :class="{ 'd-none': !this.hasNext }"
              >
                下一篇
                <h3 class="mt-2 fs-7 text-truncate">
                  {{ this.nextArticle.title }}
                </h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-none d-md-block position-sticky">
          <ul class="list-group rounded-0">
            <li>
              <p class="fw-bold fs-6 list-group-item list-group-item-action">
                最新文章
              </p>
            </li>
            <template v-for="article in articles" :key="article.id">
              <li class="fs-7 py-1 list-group-item list-group-item-action">
                <RouterLink
                  :to="`/article/${article.id}`"
                  class="text-dark d-block py-2"
                >
                  {{ article.title }}
                </RouterLink>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import useArticleStore from "@/stores/ArticleStore";
import { mapActions, mapState } from "pinia";

export default {
  props: ["id"],
  computed: {
    ...mapState(useArticleStore, [
      "article",
      "articles",
      "hasPre",
      "hasNext",
      "nextArticle",
      "preArticle",
      "filterArticlesTitle",
    ]),
  },
  watch: {
    "$route.params.id"() {
      if (this.$route.name === "article") {
        this.getArticle(this.$route.params.id);
      }
    },
  },
  methods: {
    ...mapActions(useArticleStore, [
      "getArticles",
      "getArticle",
      "createDate",
      "clearArticle",
    ]),

    getNextArticle() {
      this.$router.push({ path: `/article/${this.nextArticle.id}` });
      this.getArticle(this.nextArticle.id);
    },

    getPreArticle() {
      this.$router.push({ path: `/article/${this.preArticle.id}` });
      this.getArticle(this.preArticle.id);
    },
  },
  mounted() {
    this.getArticles();
    this.getArticle(this.id);
  },
  unmounted() {
    this.clearArticle();
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";

.link-article {
  transition: all 0.4s ease;

  h3 {
    transition: all 0.4s ease;
  }

  &:hover {
    background-color: rgba($color: $secondary-100, $alpha: 0.1);
    color: $secondary !important;

    h3 {
      color: $secondary;
    }
  }
}
.link-pre:hover {
  transform: translateX(-5px);
}
.link-next:hover {
  transform: translateX(5px);
}
</style>
