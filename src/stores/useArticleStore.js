import axios from "axios";
import { defineStore } from "pinia";
import useLoadingStore from "./useLoadingStore";
import useToastMessageStore from "./useToastMessageStore";
const { VITE_API, VITE_API_PATH } = import.meta.env;
const { loadingState } = useLoadingStore();
const { pushMessage } = useToastMessageStore();

const useArticleStore = defineStore("useArticleStore", {
  state: () => ({
    article: {},
    articles: [],
    pagination: {},
    lastImage: "",
  }),
  getters: {
    filterLastArticles() {
      return this.articles.slice(0, 3);
    },
  },
  actions: {
    // 取得所有最新消息
    getArticles() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/articles`;
      loadingState(true);
      axios
        .get(url)
        .then((res) => {
          loadingState(false);
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          this.getLastImage();
        })
        .catch((err) => {
          loadingState(false);
          pushMessage({
            style: "danger",
            title: "取得文章失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 取得單一文章
    getArticle(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/article/${id}`;

      loadingState(true);

      axios
        .get(url)
        .then((res) => {
          loadingState(false);
          this.article = res.data.article;
        })
        .catch((err) => {
          loadingState(false);
          pushMessage({
            style: "danger",
            title: "取得文章失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 清空文章資料
    clearArticle() {
      this.article = {};
    },

    // 取得最新文章的圖片
    getLastImage() {
      this.lastImage = this.articles[0].image;
    },

    // 轉換時間格式
    createDate(ms) {
      const timer = new Date(ms * 1000);
      const y = timer.getFullYear();
      const m =
        timer.getMonth() + 1 >= 10
          ? timer.getMonth() + 1
          : `0${timer.getMonth() + 1}`;
      const d = timer.getDate() >= 10 ? timer.getDate() : `0${timer.getDate()}`;
      return `${y}/${m}/${d}`;
    },
  },
});

export default useArticleStore;
