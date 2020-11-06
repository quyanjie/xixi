import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from "axios"
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// axios.defaults.baseURL = 'http://localhost:3003'
axios.defaults.baseURL = 'http://wandour.top/mouse'
// axios.defaults.baseURL = 'http://192.168.0.104:8086'
// axios.defaults.baseURL = 'http://127.0.0.1:8086'

Vue.use(ElementUI);

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
