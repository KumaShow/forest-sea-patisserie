<template>
  <div class="tool-box d-inline-block">
    <ul class="rounded-1 bg-secondary text-white py-4 px-2">
      <li class="mb-4 tool-bok-item">
        <a
          href="https://www.facebook.com/ForestSeaPatisserie"
          target="_blank"
          class="tool-box-link"
        >
          <font-awesome-icon
            class="tool-box-icon"
            icon="fa-brands fa-facebook"
          />
        </a>
      </li>
      <li class="mb-4">
        <a
          href="https://linktr.ee/forestsea?fbclid=PAAabcA4E1fcyRdjZ8DEVooZ8SDQOP_UziVll4cIUfyB8SW9PNvuAJogqtdqc"
          target="_blank"
          class="tool-box-link"
        >
          <font-awesome-icon class="tool-box-icon" icon="fa-brands fa-line" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/patisserie_forest_sea?igshid=YmMyMTA2M2Y="
          target="_blank"
          class="tool-box-link"
        >
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
@import "bootstrap/scss/functions";
@import "@/assets/stylesheets/helpers/variables";

.tool-box {
  position: relative;
  z-index: 1000;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  &-icon {
    width: 24px;
    height: 24px;
  }

  &-item:hover {
    transform: translateY(15px);
  }

  &-link:hover {
    color: #fff;
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
