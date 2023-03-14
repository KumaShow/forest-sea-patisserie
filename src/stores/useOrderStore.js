import axios from "axios";
import { defineStore } from "pinia";
const { VITE_API, VITE_API_PATH } = import.meta.env;

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
          // console.log(res);
          // console.log("訂單資料:", this.order);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export default useOrderStore;
