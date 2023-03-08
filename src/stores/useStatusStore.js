import { defineStore } from "pinia";

const useStatusStore = defineStore("useStatusStore", {
  state: () => ({
    scrollPosition: 0,
    isNewsPosition: false,
  }),
  actions: {
    // 設定捲軸滾動位置
    setScrollPosition(newPosition) {
      this.scrollPosition = newPosition;
    },
    // 判斷是否滾到最新消息
    setNewsPosition(boolean) {
      this.isNewsPosition = boolean;
    },
  },
});

export default useStatusStore;
