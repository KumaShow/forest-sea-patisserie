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
    favorites: [],
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
          window.scrollTo(0, 0);
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
        })
        .catch((err) => {
          pushMessage({
            style: "danger",
            title: "取得產品失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    // 更新選擇的類別
    setCategory(category = "") {
      this.category = category;
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
      this.loadingItem = id;

      axios
        .post(url, { data })
        .then(() => {
          getCarts();
          this.loadingItem = "";
          pushMessage({
            title: "已加入購物車",
          });
        })
        .catch((err) => {
          this.loadingItem = "";
          pushMessage({
            style: "danger",
            title: "加入購物車失敗，請稍後再試",
            content: `${err.response.data.message}`,
          });
        });
    },

    //  取得單一產品資料
    getProduct(productId) {
      const url = `${VITE_API}/api/${VITE_API_PATH}/product/${productId}`;
      loadingState(true);
      // 打開前清空上一次產品資料
      this.product = {};
      axios.get(url).then((res) => {
        this.product = res.data.product;
        this.category = res.data.product.category;
        loadingState(false);
      });
    },

    // 加入、刪除最愛
    setFavorite(id) {
      if (this.favorites.includes(id)) {
        const idx = this.favorites.findIndex((item) => item === id);
        this.favorites.splice(idx, 1);
        pushMessage({
          title: "已刪除產品",
        });
      } else {
        this.favorites.push(id);
        pushMessage({
          title: "已加入我的最愛",
        });
      }
      const favoriteStr = JSON.stringify(this.favorites);
      localStorage.setItem("favorites", "");
      localStorage.setItem("favorites", favoriteStr);
      this.getFavorites();
    },

    // 取得 localStorage favorites
    getFavorites() {
      this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
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

    // 篩選熱門 - 熱門商品
    filterHotProducts() {
      return this.productsAll.filter((item) => item.is_hot === 1);
    },

    // 篩選類別 - 推薦商品
    filterCategoryProducts() {
      return this.productsAll.filter((item) => item.category === this.category);
    },

    // 篩選最愛的產品
    filterFavorites() {
      return this.productsAll.filter((item) =>
        this.favorites.includes(item.id)
      );
    },
  },
});

export default useProductStore;
