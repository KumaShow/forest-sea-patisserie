import axios from "axios";
import { defineStore } from "pinia";
import useToastMessageStore from "./useToastMessageStore";
const { VITE_API, VITE_API_PATH } = import.meta.env;
const { pushMessage } = useToastMessageStore();

const useOrderStore = defineStore("useOrderStore", {
  state: () => ({
    order: {
      products: [],
      user: {
        address: "",
        email: "",
        name: "",
        tel: "",
      },
    },
  }),
  actions: {
    // 取得訂單資料
    getOrder(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/order/${id}`;

      axios
        .get(url)
        .then((res) => {
          this.order = "";
          this.order = res.data.order;
        })
        .catch((err) => {
          pushMessage({
            style: "danger",
            title: "取得訂單失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

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

export default useOrderStore;
