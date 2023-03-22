<template>
  <div class="position-relative">
    <aside class="side-menu">
      <h3 class="fs-5 mb-6">商品類別</h3>
      <ul class="list-group list-group-flush box-shadow-3">
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
  },
  methods: {
    ...mapActions(useProductStore, ["getProducts", "setCategory"]),
  },
};
</script>

<style>
.side-menu {
  position: sticky;
  top: 100px;
}
</style>
