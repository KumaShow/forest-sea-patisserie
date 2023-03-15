<template>
  <div class="front-layout">
    <FrontNavBar :is-mobile="isMobile" ref="header" />
    <BreadCrumb v-show="this.$route.path !== '/'" />
    <RouterView />
    <ToolBox class="the-tool-box d-none d-md-block" />
    <FrontFooter />
    <TheToastMessage />
    <TheLoading />
  </div>
</template>

<script>
import FrontNavBar from "@/components/frontend/FrontNavBar.vue";
import ToolBox from "@/components/frontend/ToolBox.vue";
import FrontFooter from "@/components/frontend/FrontFooter.vue";
import BreadCrumb from "@/components/frontend/BreadCrumb.vue";
import TheToastMessage from "@/components/TheToastMessage.vue";
import TheLoading from "@/components/TheLoading.vue";

export default {
  components: {
    FrontNavBar,
    ToolBox,
    FrontFooter,
    BreadCrumb,
    TheToastMessage,
    TheLoading,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    // 判斷使用者設備寬度(若直接在 PC 拖拉視窗，需重整抓寬度判斷)
    this.isMobile = window.matchMedia("(max-width: 768px)").matches;
  },
};
</script>

<style lang="scss">
.front-layout {
  position: relative;
}
.the-tool-box {
  position: fixed;
  right: 50px;
  bottom: 80px;
}
.main-height {
  min-height: calc(100vh - 64px - 48px - 67px);
}
</style>
