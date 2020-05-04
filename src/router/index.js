import Vue from 'vue'
import VueRouter from 'vue-router'

import list from '../components/list.vue'
import foo from '../components/foo.vue'
import boo from '../components/boo.vue'
import add from '../components/listProcess/add.vue'
import edit from '../components/listProcess/edit.vue'
import order from '../components/order/order.vue'
import paymentDetails from '../components/order/PaymentDetails.vue'
import allOrders from '../components/allOrders.vue'
import sports from '../components/sports/sports.vue'
import sportsEcharts from '../components/sportsEcharts.vue'
import goodsList from '../components/goods/goodsList.vue'



Vue.use(VueRouter)

var routes = [
  {
    name: 'list', path: '/list', component: list
  },
  {
    name: 'foo', path: '/foo', component: foo
  },
  {
    name: 'boo', path: '/boo', component: boo
  },
  {
    name: 'add', path: '/add', component: add
  },
  {
    name: 'edit', path: '/edit/:id', component: edit
  },
  {
    name: 'order', path: '/order/:id', component: order
  },
  {
    name: 'sports', path: '/sports/sports', component: sports
  },
  {
    name: 'sportsEcharts', path: '/sportsEcharts', component: sportsEcharts
  },
  {
    name: 'goodsList', path: '/goods/goodsList', component: goodsList
  },
  {
    name: 'paymentDetails', path: '/order/PaymentDetails', component: paymentDetails
  },
  {
    name: 'allOrders', path: '/allOrders', component: allOrders
  }
]
var router = new VueRouter({
  routes
})
//暴露router对象
export default router