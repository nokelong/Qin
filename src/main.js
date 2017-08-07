// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-shim'
import css from '@/assets/css/main.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import  { AlertPlugin , LoadingPlugin } from 'vux'
// import axios from 'axios'
// Vue.prototype.$http = axios
Vue.config.productionTip = false 
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
