<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item, index) in titles"
        class="title"
        :class="{ active: currentIndex === index }"
        @click="titleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  props: {
    scrollIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.titles {
  display: flex;
}

.title {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back {
  margin-top: 5px;
}
</style>
