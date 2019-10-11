import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import BootstrapVue from "bootstrap-vue"
import VueScrollTo from "vue-scrollto"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./stylesheets/main.scss"

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueScrollTo, {
  offset: -72
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
