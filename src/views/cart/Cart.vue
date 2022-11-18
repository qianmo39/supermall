<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cart-list="cartList" />
    </scroll>
    <cart-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.bottom-bar {
  position: fixed;
  bottom: 49px;
}
</style>
