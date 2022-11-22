<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import TabMenu from "./childComps/TabMenu";

import { getCategory, getSubcategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].mailKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
  components: {
    NavBar,
    TabMenu,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
