import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from "axios"
import echarts from 'echarts'

// axios.defaults.baseURL = 'http://localhost:3003'
axios.defaults.baseURL = 'http://wandour.top/mouse'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
//导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
