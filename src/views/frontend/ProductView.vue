<!-- 
  TODO:
    - 尺寸後台新增對應欄位
      - 使用 a or btn 切換 select 選項，並active
-->
<template>
  <main class="Product container py-11">
    <div class="row mb-10">
      <!-- 側邊產品類別選單 -->
      <AsideProductMenu class="col-md-3" />
      <!-- 單一產品內容 -->
      <main class="col-md-9">
        <div class="container">
          <div
            class="row justify-content-between border-bottom border-2 pb-10 mb-10"
          >
            <!-- 產品圖片 -->
            <div class="col-lg-6">
              <div>
                <img
                  v-lazy="product.imageUrl"
                  alt=""
                  class="w-100 object-cover mb-7"
                  style="height: 400px"
                />
                <div class="container">
                  <ul class="row">
                    <li
                      class="p-1 border overflow-hidden me-3 col-3"
                      v-for="imageUrl in product.imagesUrl"
                      :key="imageUrl"
                    >
                      <img
                        :src="imageUrl"
                        :alt="product.title"
                        class="object-cover w-100"
                        style="height: 100px"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- 產品介紹 -->
            <div class="col-lg-6">
              <h2 class="fs-4 mb-8">{{ product.title }}</h2>
              <p class="pb-8 mb-8 border-bottom border-2">
                {{ product.description }}
              </p>

              <ul>
                <li class="d-flex align-items-center mb-7">
                  <label class="fs-7 me-6">商品尺寸:</label>
                  <select name="" id="" class="visually-hidden">
                    <option value="5">5 吋</option>
                    <option value="6">6 吋</option>
                  </select>
                  <button
                    class="btn btn-outline-gray-500 hover-text-white me-6"
                  >
                    5 吋
                  </button>
                  <button class="btn btn-outline-gray-500 hover-text-white">
                    6 吋
                  </button>
                </li>
                <li class="d-flex align-items-center mb-7">
                  <label class="fs-7 me-6">建議售價:</label>
                  <span class="fs-4">${{ product.price }}</span>
                </li>
                <li class="d-flex align-items-center mb-7">
                  <label for="productQty" class="fs-7 me-6">數量:</label>
                  <select
                    name="productQty"
                    id="productQty"
                    class="form-select w-auto"
                    v-model="qty"
                  >
                    <option v-for="i in 20" :key="i" :value="i">
                      {{ i }}
                    </option>
                  </select>
                </li>
              </ul>
              <!-- 購物車、最愛 按鈕 -->
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center me-6 py-2"
                >
                  <span class="material-symbols-outlined me-2"> favorite </span>
                  加入最愛
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center py-2"
                  @click="addToCart(product.id, qty)"
                >
                  <span class="material-symbols-outlined me-2">
                    shopping_cart
                  </span>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <!-- 商品內容 -->
          <div class="mb-11">
            <div class="mb-6">
              <h3 class="fs-5 mb-6">商品內容</h3>
              <p>{{ product.content }}</p>
            </div>
            <div class="mb-6">
              <p class="mb-1">保存方式:</p>
              <p>
                本產品無添加防腐劑與抗氧化劑，冷凍可保存10天，室溫可保存2天<br />
                -單包裝- 冷凍可保存14天，室溫可保存7天
              </p>
            </div>
            <div class="mb-6">
              <p class="mb-1">食用方式:</p>
              <p>
                從冷凍取出後，室溫退冰 5-10 分鐘後可直接食用<br />
                為保食物最佳賞味期，建議拆封後請盡速食用完畢
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- 推薦商品 -->
    <section class="">
      <h3 class="mb-8">推薦商品</h3>
      <ProductsCarousel />
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useProductStore from "@/stores/useProductStore";
import AsideProductMenu from "@/components/frontend/AsideProductMenu.vue";
import ProductsCarousel from "@/components/frontend/ProductsCarousel.vue";

export default {
  components: {
    AsideProductMenu,
    ProductsCarousel,
  },
  props: ["id"],
  data() {
    return {
      qty: 1,
      // tempProduct: {},
    };
  },
  computed: {
    ...mapState(useProductStore, ["product"]),
  },
  watch: {
    // tempProduct() {
    //   this.tempProduct = { ...this.product };
    // },
  },
  methods: {
    ...mapActions(useProductStore, [
      "getProduct",
      "addToCart",
      "getProductsAll",
    ]),
  },
  mounted() {
    this.getProduct(this.id);
    this.getProductsAll();
  },
};
</script>

<style lang="scss" scoped></style>
