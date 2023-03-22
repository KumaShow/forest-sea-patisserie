<template>
  <div class="modal" ref="modal" data-focus="false">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-1" ref="modalContent">
        <div class="modal-header">
          <h5 v-if="deleteState === 'all'" class="modal-title">清空購物車</h5>
          <h5 v-else class="modal-title">移除商品</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p v-if="deleteState === 'all'">請確認是否清空購物車商品？</p>
          <p v-else>
            請確認是否移除
            <span class="text-secondary">{{ cartItem?.product?.title }}</span>
            ？
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary rounded-1"
            @click="closeModal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary rounded-1"
            @click="deleteItems"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
    <div class="modal-mask" @click="clickMaskAlert"></div>
  </div>
</template>

<script>
import useCartStore from "@/stores/useCartStore";
import { mapActions } from "pinia";

export default {
  props: ["deleteState", "cartItem"],
  data() {
    return {
      modal: {},
      tempCartItem: {
        product: {},
      },
    };
  },
  methods: {
    ...mapActions(useCartStore, [
      "getCarts",
      "clearAllCarts",
      "deleteCartItem",
    ]),

    openModal() {
      this.modal.classList.add("d-block");
      this.$refs.modalContent.classList.add("animation-from-top");
    },

    closeModal() {
      this.modal.classList.remove("d-block");
    },

    // 刪除購物車商品
    deleteItems() {
      if (this.deleteState === "all") {
        this.clearAllCarts();
        this.closeModal();
      } else if (this.deleteState === "item") {
        this.deleteCartItem(this.cartItem.id);
        this.closeModal();
      }
    },

    // 刪除商品時的提示動畫
    clickMaskAlert() {
      const modalContent = this.$refs.modalContent;
      if (modalContent.classList.contains("animation-from-top")) {
        modalContent.classList.remove("animation-from-top");
      }
      modalContent.classList.add("animation-zoom");
      setTimeout(() => {
        modalContent.classList.remove("animation-zoom");
      }, 500);
    },
  },
  mounted() {
    this.modal = this.$refs.modal;
    this.tempCartItem = { ...this.cartItem };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-mask {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
}
</style>
