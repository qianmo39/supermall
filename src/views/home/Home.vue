<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      keywords: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res.data);
      this.banners = res.data.banner.list;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    })
  },
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>