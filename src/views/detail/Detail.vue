<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImgs="topImgs" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import { getDetail } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImgs: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImgs = res.result.itemInfo.topImages;
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
  },
};
</script>

<style scoped></style>
