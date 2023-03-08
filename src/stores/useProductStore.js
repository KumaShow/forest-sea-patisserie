import { defineStore } from "pinia";
import axios from "axios";
import useLoadingStore from "./useLoadingStore";
import useCartStore from "./useCartStore";
import useToastMessageStore from "./useToastMessageStore";

const { VITE_API, VITE_API_PATH } = import.meta.env;
const { loadingState } = useLoadingStore();
const { getCarts } = useCartStore();
const { pushMessage } = useToastMessageStore();

const useProductStore = defineStore("useProductStore", {
  state: () => ({
    isShow: false,
    products: [],
    productsAll: [],
    product: {},
    pagination: {},
    currentPage: 1,
    categories: [],
    category: "",
    loadingItem: "",
    searchTerm: "",
  }),
  actions: {
    // 取得所有產品含分頁資料
    getProducts(page = 1) {
      this.currentPage = page;
      let url = `${VITE_API}/api/${VITE_API_PATH}/products?page=${page}`;
      if (this.category) {
        url = `${VITE_API}/api/${VITE_API_PATH}/products?page=${page}&category=${this.category}`;
      }

      loadingState(true);

      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          loadingState(false);
          // console.log(res);
        })
        .catch((err) => {
          loadingState(false);
          pushMessage({
            style: "danger",
            title: "取得產品失敗",
            content: `${err.response.data.message}`,
          });
        });
    },
    // 取得所有產品資料
    getProductsAll() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/products/all`;

      axios
        .get(url)
        .then((res) => {
          this.productsAll = res.data.products;
          // 取得產品類別，並使用 Set 去除重複資料
          this.categories = Array.from(
            new Set(this.productsAll.map((product) => product.category))
          );
          // console.log(this.productsAll);
        })
        .catch((err) => console.log(err));
    },

    // 更新選擇的類別
    setCategory(category = "") {
      this.category = category;
      // console.log(this.category);
    },

    // 更新搜尋結果
    setQuery(query) {
      this.searchTerm = query;
    },

    // 加入購物車
    addToCart(id, num = 1) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/cart`;
      const data = {
        product_id: id,
        qty: num,
      };
      loadingState(true);
      // console.log("url:", url);
      // console.log("data:", data);

      axios
        .post(url, { data })
        .then((res) => {
          // console.log(res.data);
          getCarts();
          loadingState(false);
          // if (this.isShow) {
          //   this.isShow = false;
          //   loadingState(false);
          // }
          // this.pushMessage({
          //   title: "已加入購物車",
          // });
        })
        .catch((err) => {
          loadingState(false);
          // pushMessage({
          //   style: "danger",
          //   title: "加入購物車失敗，請稍後再試",
          //   content: `${err.response.data.message}`,
          // });
          console.log(err);
        });
    },

    // // 取得單一產品資料
    getProduct(productId) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/product/${productId}`;
      loadingState(true);
      // 打開前清空上一次產品資料
      this.product = {};
      axios.get(url).then((res) => {
        this.product = res.data.product;
        loadingState(false);
        // console.log("getProduct:", this.product);
      });
    },
  },
  getters: {
    // 依據輸入的搜尋詞顯示篩選後的產品
    filterProductsList() {
      return this.searchTerm === ""
        ? this.productsAll
        : this.productsAll.filter((item) => {
            return (
              item.title.includes(this.searchTerm) ||
              item.category.includes(this.searchTerm)
            );
          });
    },
  },
});

export default useProductStore;
