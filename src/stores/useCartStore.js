import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import useLoadingStore from "./useLoadingStore";
import useToastMessageStore from "./useToastMessageStore";

const { VITE_API, VITE_API_PATH } = import.meta.env;
const { loadingState } = useLoadingStore();
const { pushMessage } = useToastMessageStore();

const useCartStore = defineStore("useCartStore", {
  state: () => ({
    cart: {
      carts: [],
    },
  }),
  actions: {
    // 取得購物車資料
    getCarts() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/cart`;

      axios
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          loadingState(false);
        })
        .catch((err) => {
          loadingState(false);
          pushMessage({
            style: "danger",
            title: "取得購物車資料失敗",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 清空購物車
    clearAllCarts() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/carts`;
      axios
        .delete(url)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "購物車已清空",
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCarts();
        })
        .catch((err) => {
          pushMessage({
            style: "danger",
            title: "刪除產品失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 刪除購物車單一產品
    deleteCartItem(id) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/cart/${id}`;

      axios
        .delete(url)
        .then(() => {
          this.getCarts();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "已刪除",
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          pushMessage({
            style: "danger",
            title: "刪除產品失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 更新購物車產品數量
    updateCartItem(item) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };

      if (item.qty === 0) {
        this.deleteCartItem(item.id);
      } else if (item.qty >= 100) {
        cart.qty = 100;
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "商品數量不得大於 100 個",
          showConfirmButton: true,
          timer: 2000,
        });
      } else {
        this.loadingItem = item.id;
        axios
          .put(url, { data: cart })
          .then(() => {
            this.getCarts();
            pushMessage({
              style: "success",
              title: "產品數量更新成功",
            });
            this.loadingItem = "";
          })
          .catch((err) => {
            pushMessage({
              style: "danger",
              title: "產品數量更新失敗",
              content: `${err.response.data.message}`,
            });
          });
      }
    },
  },
});

export default useCartStore;
