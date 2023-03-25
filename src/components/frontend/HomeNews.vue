<template>
  <div class="container" data-aos="fade-up">
    <!-- 文章列表 -->
    <div class="text-center mb-10 mb-lg-10">
      <h2 class="font-serif text-white">最新消息</h2>
      <img src="@/assets/images/header_line.svg" alt="標題底線" />
    </div>
    <ul class="row justify-content-center">
      <template v-for="article in filterLastArticles" :key="article.id">
        <li class="col-10 col-lg-4">
          <RouterLink :to="`/article/${article.id}`">
            <figure class="overflow-hidden news-img">
              <img
                :src="article.image"
                :alt="article.title"
                class="object-cover w-100"
              />
              <figcaption
                class="fs-4 p-2 d-flex flex-column justify-content-center align-items-center"
              >
                <h3 class="text-white mb-2 fs-4 fs-md-3">
                  {{ article.title }}
                </h3>
                <span
                  class="text-white fs-7 fs-md-6 w-md-75 w-lg-100 text-center"
                >
                  {{ article.description }}
                </span>
              </figcaption>
            </figure>
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import useArticleStore from "@/stores/ArticleStore";
import { mapActions, mapState } from "pinia";

export default {
  computed: {
    ...mapState(useArticleStore, ["filterLastArticles", "lastImage"]),
  },
  methods: {
    ...mapActions(useArticleStore, ["createDate", "getArticles"]),

    getArticleImage(imageUrl) {
      this.articleImage = imageUrl;
    },
  },
};
</script>

<style lang="scss">
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";
@import "@/assets/stylesheets/helpers/mixin.scss";

.news-img {
  position: relative;

  img {
    transform: scale(1);
    filter: brightness(0.7);
    transition: all 0.3s ease-out;
    aspect-ratio: 4/3;
  }

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  h3 {
    transition: all 0.3s ease-out;
  }

  span {
    padding: 0 16px;

    @include respond-min(lg) {
      transition: all 0.3s ease-out;
      transform: translateY(50px);
      opacity: 0;
      visibility: hidden;
      line-height: 0;
    }
  }

  &:hover {
    img {
      filter: blur(2px) brightness(0.5);
      transform: scale(1.2);
    }
    h3 {
      color: $secondary !important;
    }
    @include respond-min(lg) {
      span {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        line-height: 1.25;
      }
    }
  }
}
</style>
