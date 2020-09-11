import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// (process.env.NODE_ENV==='development') && require('./components/mock/mockServer') //第一种方式

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
