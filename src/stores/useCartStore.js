import { defineStore } from "pinia";
import router from "../router/index";
import axios from "axios";
import Swal from "sweetalert2";
import useLoadingStore from "./useLoadingStore";

const { VITE_API, VITE_API_PATH } = import.meta.env;
const { loadingState } = useLoadingStore();

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
          // console.log("cart:", this.cart);
        })
        .catch((err) => {
          loadingState(false);
          alert(err);
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
          alert(err);
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
          alert(err);
        });
    },

    // 更新購物車產品數量
    updateCartItem(item) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };

      if (!item.qty || item.qty === "e") {
        cart.qty = 1;
        alert("商品數量不得小於 1 個");
      } else if (item.qty >= 20) {
        cart.qty = 20;
        alert("商品數量不得大於 20 個");
      }
      this.loadingItem = item.id;

      axios
        .put(url, { data: cart })
        .then(() => {
          this.getCarts();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "數量已更新",
            showConfirmButton: false,
            timer: 1500,
          });
          this.loadingItem = "";
        })
        .catch((err) => {
          alert(err);
        });
    },

    // 跳轉頁面到產品
    linkToProducts() {
      router.push({ name: "products" });
    },
  },
  getters: {},
});

export default useCartStore;
