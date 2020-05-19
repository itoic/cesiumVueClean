/*
 * @Author: your name
 * @Date: 2019-12-06 10:13:54
 * @LastEditTime: 2020-05-19 13:54:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cesiumVueClean\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// cesium

let Cesium = require('cesium/Cesium');
import 'cesium/Widgets/widgets.css'
Vue.prototype.Cesium = Cesium
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
