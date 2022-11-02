<template>
  <div class="back-top">
    <img src="~/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 5px;
  background-color: transparent;
}

.back-top img {
  width: 44px;
  height: 44px;
}
</style>
