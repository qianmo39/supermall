<template>
  <div>
    <grid-view
      :clos="3"
      :line-space="15"
      :v-margin="20"
      v-if="subcategories.list"
    >
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" @load="imageLoad" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";

export default {
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("categoryImgLoad")
    }
  },
  components: {
    GridView,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
