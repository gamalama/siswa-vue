import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import vueConfig from "vue.config";


Library.add { faShoppingCart }

Vue.config.productionTip = false;



createApp(App).mount("#app");

new Vue ({
    render: h => h(App)
}).$mount("#App")