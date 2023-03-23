import axios from "axios";
import { defineStore } from "pinia";
import useLoadingStore from "./useLoadingStore";
import useToastMessageStore from "./useToastMessageStore";
const { VITE_API, VITE_API_PATH } = import.meta.env;
const { loadingState } = useLoadingStore();
const { pushMessage } = useToastMessageStore();

const useArticleStore = defineStore("useArticleStore", {
  state: () => ({
    articles: [],
    article: {},
    currentNum: 0,
    preNum: 0,
    nextNum: 0,
    nextArticle: {},
    preArticle: {},
    hasNext: null,
    hasPre: null,
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

          const currentArticle = this.articles.filter((item) => {
            return item.id === id;
          });
          this.currentNum = currentArticle[0]?.num;
          this.getNextArticle();
          this.getPreArticle();
        })
        .catch((err) => {
          loadingState(false);
          pushMessage({
            style: "danger",
            title: "取得文章失敗，請稍後再試",
            content: `${err.response}`,
          });
        });
    },

    // 取得下一篇文章
    getNextArticle() {
      this.nextNum = this.currentNum + 1;
      if (this.nextNum <= this.articles.length) {
        const filterArticle = this.articles.filter((item) => {
          return item.num === this.nextNum;
        });
        this.nextArticle = filterArticle[0];
        this.hasNext = true;
      } else {
        this.hasNext = false;
      }
    },

    // 取得上一篇文章
    getPreArticle() {
      this.preNum = this.currentNum - 1;
      if (this.preNum) {
        const filterArticle = this.articles.filter((item) => {
          return item.num === this.preNum;
        });
        this.preArticle = filterArticle[0];
        this.hasPre = true;
      } else {
        this.hasPre = false;
      }
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
