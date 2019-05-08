import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

//引入axios
import axios from 'axios';
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
axios.defaults.baseURL = 'https://www.goodb2b.cn/pos/sale_inte' //line
//axios.defaults.baseURL = 'http://192.168.1.177:9873/pos/sale_inte' //location

//引入mui.js
import muis from './static/js/common.js'
Vue.prototype.$mui = muis

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
