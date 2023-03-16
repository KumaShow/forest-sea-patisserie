import axios from "axios";
import { defineStore } from "pinia/dist/pinia";
import useToastMessageStore from "./useToastMessageStore";
const { VITE_API, VITE_API_PATH } = import.meta.env;
const { pushMessage } = useToastMessageStore();

const useCalendarStore = defineStore("useCalendarStore", {
  state: () => ({
    days: [],
    articleDayOff: [],
  }),
  getters: {
    // 整理出日期 "YYYY-MM-DD"
    dates() {
      return this.days.map((day) => day.id);
    },
    // 計算公休日
    dayOff() {
      return this.dates.map((day) => new Date(day).getDate());
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  actions: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    // 取得公休日期的文章，並取得公休日期
    getDayOff() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/articles`;

      axios
        .get(url)
        .then((res) => {
          const articlesArr = res.data.articles;
          const dayOffArticle = articlesArr.filter(
            (article) => article.isDayOff
          );
          this.articleDayOff = dayOffArticle[0].dayOff;
        })
        .catch((err) => {
          pushMessage({
            style: "danger",
            title: "取日期失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },
  },
});

export default useCalendarStore;
