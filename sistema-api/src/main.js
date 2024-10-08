import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin, ToastPlugin } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(ToastPlugin);

Vue.use(VueAxios, axios);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
