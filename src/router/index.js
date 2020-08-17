import Vue from 'vue'
import VueRouter from 'vue-router'

import list from '../components/list.vue'
import foo from '../components/foo.vue'
import boo from '../components/boo.vue'
import addGoods from '../components/goods/addGoods.vue'
import edit from '../components/listProcess/edit.vue'
import order from '../components/order/order.vue'
import paymentDetails from '../components/order/PaymentDetails.vue'
import allOrders from '../components/allOrders.vue'
import sports from '../components/sports/sports.vue'
import sportsV2 from '../components/sports/sportsV2.vue'
import sportsV3 from '../components/sports/sportsV3.vue'
import sportsEcharts from '../components/sports/sportsEcharts.vue'
import sportsCalendarCharts from '../components/sports/charts/CalendarPoint'
import effectScatterBmap from '../components/sports/charts/effectScatterBmap'
import goodsList from '../components/goods/goodsList.vue'
import button from '../components/work/button.vue'
import upload from '../components/work/upload.vue'
import uploadLiming from '../components/work/uploadLiming'
import uploadLimingV2 from '../components/work/uploadLimingV2'


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
    name: 'addGoods', path: '/goods/addGoods', component: addGoods
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
    name: 'sportsV2', path: '/sports/sportsV2', component: sportsV2
  },
  {
    name: 'sportsV3', path: '/sports/sportsV3', component: sportsV3
  },
  {
    name: 'sportsEcharts', path: '/sports/sportsEcharts', component: sportsEcharts
  },
  {
    name: 'sportsCalendarCharts', path: '/sports/charts/CalendarPoint', component: sportsCalendarCharts
  },
  {
    name: 'effectScatterBmap', path: '/sports/charts/effectScatterBmap', component: effectScatterBmap
  },
  {
    name: 'goodsList', path: '/goods/goodsList', component: goodsList
  },
  {
    name: 'paymentDetails', path: '/order/PaymentDetails', component: paymentDetails
  },
  {
    name: 'allOrders', path: '/allOrders', component: allOrders
  },
  {
    name: 'button', path: '/work/button', component: button
  },
  {
    name: 'upload', path: '/work/upload', component: upload
  },
  {
    name: 'uploadLiming', path: '/work/uploadLiming', component: uploadLiming
  },
  {
    name: 'uploadLimingV2', path: '/work/uploadLimingV2', component: uploadLimingV2
  }
]
var router = new VueRouter({
  routes
})
//暴露router对象
export default router
