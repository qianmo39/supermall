import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
};

export const backTopMixin = {
  data() {
    return {
      showBackTop: false,
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  components: {
    BackTop,
  },
};
