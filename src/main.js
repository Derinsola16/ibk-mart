import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap";
import popper from "popper.js";
import bootstrapmin from "bootstrap/dist/css/bootstrap.min.css";
import style from "./style/index.css";
import responsive from "./style/responsive.css";
import main from "./style/main.css";
import fonts from "./plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import owlCss from "./plugins/OwlCarousel/owl.carousel.css";
import owlAnimate from "./plugins/OwlCarousel/animate.css";
import owlTheme from "./plugins/OwlCarousel/owl.theme.default.css";
import jquery from "./plugins/Js/jquery.min.js";
import customJs from "./plugins/Js/custom.js";
// import owlJs from "./plugins/OwlCarousel/owl.carousel.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  style,
  responsive,
  main,
  bootstrap,
  popper,
  bootstrapmin,
  fonts,
  owlCss,
  owlAnimate,
  owlTheme,
  jquery,
  customJs,
  // owlJs,
  render: h => h(App)
}).$mount("#app");
