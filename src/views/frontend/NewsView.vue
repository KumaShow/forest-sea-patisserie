<template>
  <div class="bg-mask-texture">
    <main class="py-11 main-height">
      <div class="container">
        <h2 class="text-center mb-10 font-serif">最新消息</h2>
        <ul class="row justify-content-center">
          <template v-for="article in articles" :key="article.id">
            <li class="mb-8 mb-md-10 col-9 col-md-10">
              <RouterLink
                :to="`/article/${article.id}`"
                class="text-dark row justify-content-center article-link border-bottom pb-8"
              >
                <!-- 文章圖片 -->
                <div class="col-md-4 px-0 pe-md-4">
                  <div class="overflow-hidden">
                    <img
                      v-lazy="article.image"
                      alt="文章圖片"
                      class="object-cover w-100"
                      style="height: 200px"
                    />
                  </div>
                </div>
                <!-- 文章內容 -->
                <div class="col-md-8">
                  <div>
                    <!-- 文章 Title -->
                    <h3 class="fs-4 my-3 article-title">
                      <a>{{ article.title }}</a>
                    </h3>
                    <!-- Tag & 時間 -->
                    <p class="my-4 my-md-6">
                      <template
                        v-for="(tag, idx) in article.tag"
                        :key="tag + idx"
                      >
                        <span
                          class="fs-8 py-1 px-2 me-4 bg-secondary rounded-1 text-white"
                        >
                          {{ tag }}
                        </span>
                      </template>
                      {{ createDate(article.create_at) }}
                    </p>
                    <p class="">
                      {{ article.description }}
                    </p>
                  </div>
                </div>
              </RouterLink>
            </li>
          </template>
        </ul>
        <ThePagination :pages="pagination" />
      </div>
    </main>
    <RouterView />
  </div>
</template>

<script>
import ThePagination from "@/components/ThePagination.vue";
import useArticleStore from "@/stores/useArticleStore";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    ThePagination,
  },
  computed: {
    ...mapState(useArticleStore, [
      "articles",
      "pagination",
      "filterLastArticles",
    ]),
  },
  methods: {
    ...mapActions(useArticleStore, ["getArticles", "createDate"]),
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";
.article-link:hover {
  h3 {
    color: $secondary;
  }
  img {
    transform: scale(1.2);
  }
}
.article-link {
  h3 {
    transition: all 0.3s ease-out;
  }
  img {
    transition: transform 0.3s ease-out;
  }
}
</style>
