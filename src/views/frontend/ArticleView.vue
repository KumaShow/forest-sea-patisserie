<template>
  <div class="bg-mask-texture">
    <main class="container py-11 main-height">
      <div class="row justify-content-center">
        <div class="col-9 col-md-8">
          <article class="border-bottom mb-10">
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
                style="aspect-ratio: 4/3"
              />
            </figure>
            <!-- 文章內容 -->
            <div class="my-10" v-html="article.content"></div>
          </article>
          <div>
            <button
              type="button"
              @click="$router.go(-1)"
              class="btn btn-primary px-6 px-md-10 py-2 py-md-4 rounded-1"
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import useArticleStore from "@/stores/useArticleStore";
import { mapActions, mapState } from "pinia";

export default {
  props: ["id"],
  computed: {
    ...mapState(useArticleStore, ["article"]),
  },
  methods: {
    ...mapActions(useArticleStore, [
      "getArticle",
      "createDate",
      "clearArticle",
    ]),
  },
  mounted() {
    this.getArticle(this.id);
  },
  unmounted() {
    this.clearArticle();
  },
};
</script>
