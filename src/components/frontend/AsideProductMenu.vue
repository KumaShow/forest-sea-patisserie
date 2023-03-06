<!-- 
  TODO:
    - 連結依據類別變動 v
    - 樣式調整 v
  BUG:
    - 頁面跳轉問題: 跳轉頁面不會回到全部商品，會保留在上一個類別
-->
<template>
  <div class="position-relative">
    <aside class="side-menu">
      <h3 class="fs-5 mb-6">商品類別</h3>
      <ul class="list-group list-group-flush">
        <li>
          <a
            href="#"
            class="list-group-item list-group-item-action py-4 fs-6"
            :class="{ active: category === '' }"
            @click.prevent="
              setCategory(''), this.$router.push({ name: 'products' })
            "
          >
            全部商品
          </a>
        </li>
        <li v-for="item in categories" :key="item">
          <a
            href="#"
            class="list-group-item list-group-item-action py-4 fs-6"
            :class="{ active: item === category }"
            @click.prevent="
              setCategory(item), this.$router.push({ name: 'products' })
            "
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import useProductStore from "@/stores/useProductStore";
import { mapActions, mapState } from "pinia";

export default {
  computed: {
    ...mapState(useProductStore, ["categories", "products", "category"]),

    // filteredProducts() {
    //   // if (this.setCategory === "all") {
    //   //   // 如果未選擇類別，則顯示所有產品
    //   //   return this.products;
    //   // } else {
    //   //   // 否則，只顯示選擇的類別相關的產品
    //   // }
    //   return this.products.filter((product) =>
    //     product.category.match(this.setCategory)
    //   );
    // },
  },
  watch: {
    // $route(to, from) {
    //   console.log("to:", to.name, "from:", from.name);
    //   if (to.name === "products" && from.name !== "product") {
    //     this.setCategory("");
    //   }
    // },
  },
  methods: {
    ...mapActions(useProductStore, ["getProducts", "setCategory"]),
  },
  // mounted() {
  //   console.log(this.category);
  // },
  // unmounted() {
  //   console.log("unmounted");
  //   this.setCategory("");
  // },
};
</script>

<style lang="scss" scoped>
.side-menu {
  position: sticky;
  top: 100px;
}
</style>
