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
  },
});

export default useOrderStore;
