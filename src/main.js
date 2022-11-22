import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "./components/common/toast";

import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(toast);

FastClick.attach(document.body);

const loadImage = require("./assets/img/common/placeholder.png");

Vue.use(VueLazyLoad, {
  loading: loadImage,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
