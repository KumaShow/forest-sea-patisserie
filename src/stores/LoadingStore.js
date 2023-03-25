import { defineStore } from "pinia";

const useLoadingStore = defineStore("loadingStore", {
  state: () => ({
    isLoading: false,
    fullPage: true,
  }),

  actions: {
    loadingState(boolean) {
      this.isLoading = boolean;
    },
  },
});

export default useLoadingStore;
