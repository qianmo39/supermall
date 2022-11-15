import { debounce } from "./utils";

export const itemImgListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
};
