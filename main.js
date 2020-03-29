import Vue from "vue";
import App from "./App";
import "./plugins/proto.js";
import "./plugins/vue-extend.js";

import AppPublic from "./components/public/AppPublic";
Vue.component("AppPublic", AppPublic);

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue({
  ...App
});
app.$mount();
