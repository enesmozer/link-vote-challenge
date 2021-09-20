import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/app.scss";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
