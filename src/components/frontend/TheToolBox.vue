<!-- 
  TODO: hover樣式
-->
<template>
  <div class="tool-box d-inline-block">
    <ul class="rounded-1 bg-secondary text-white py-4 px-2">
      <li class="mb-4">
        <a href="#">
          <font-awesome-icon
            class="tool-box-icon"
            icon="fa-brands fa-facebook"
          />
        </a>
      </li>
      <li class="mb-4">
        <a href="#">
          <font-awesome-icon class="tool-box-icon" icon="fa-brands fa-line" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon
            class="tool-box-icon"
            icon="fa-brands fa-instagram"
          />
        </a>
      </li>
    </ul>
    <button
      class="tool-box-toTop border-0 rounded-2 bg-white text-primary"
      type="button"
      @click="scrollToTop"
    >
      <span class="material-symbols-outlined"> vertical_align_top </span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.tool-box {
  position: relative;

  &-icon {
    width: 24px;
    height: 24px;
  }

  &-toTop {
    position: absolute;
    left: -8px;
    bottom: -50px;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  }
}
</style>
