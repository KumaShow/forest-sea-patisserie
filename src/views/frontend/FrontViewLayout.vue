<template>
  <div class="front-layout">
    <FrontNavBar />
    <TheBreadcrumb v-if="this.$route.path !== '/'" />
    <RouterView class="min-height" />
    <TheToolBox class="the-tool-box" />
    <FrontFooter />
  </div>
</template>

<script>
import FrontNavBar from "@/components/frontend/FrontNavBar.vue";
import TheToolBox from "@/components/frontend/TheToolBox.vue";
import FrontFooter from "@/components/frontend/FrontFooter.vue";
import TheBreadcrumb from "@/components/frontend/TheBreadcrumb.vue";

export default {
  components: {
    FrontNavBar,
    TheToolBox,
    FrontFooter,
    TheBreadcrumb,
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
.min-height {
  min-height: calc(100vh - 64px - 48px - 67px);
}
</style>
