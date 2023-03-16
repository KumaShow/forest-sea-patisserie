import { defineStore } from "pinia";

const useLoadingStore = defineStore("useLoadingStore", {
  state: () => ({
    isLoading: false,
    fullPage: true,
  }),

  actions: {
    loadingState(boolean) {
      this.isLoading = boolean;
    },

    // onCancel() {
    //   console.log("User cancelled the loader.");
    // },
  },
});

export default useLoadingStore;
