<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImgs="topImgs" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-params-info :params-info="paramsInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="recommends" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImgs = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.Crate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  background-color: #fff;
  height: 44px;
}

.content {
  height: calc(100% - 44px);
}
</style>
