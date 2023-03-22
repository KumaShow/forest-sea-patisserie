<template>
  <FrontNavBar />
  <main
    class="text-center min-height d-flex justify-content-center align-items-center bg-mask-texture"
  >
    <div>
      <h2 class="text-center display-1 mb-8">404</h2>
      <p class="fs-4 mb-8">對不起，您輸入的網址不存在！</p>
      <button
        type="button"
        class="btn btn-secondary text-white"
        data-bs-dismiss="offcanvas"
        @click="this.$router.push('/products')"
      >
        找甜點去
      </button>
    </div>
  </main>
</template>

<script>
import FrontNavBar from "@/components/frontend/FrontNavBar.vue";

export default {
  components: {
    FrontNavBar,
  },
};
</script>
