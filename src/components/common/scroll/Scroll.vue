<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "Scroll",
  mounted() {
    const bs = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true,
      mouseWheel: true,
    });
  },
};
</script>

<style scoped></style>
