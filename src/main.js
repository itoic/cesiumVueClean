/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lqc
 * @Date: 2019-12-06 14:39:58
 * @LastEditors: lqc
 * @LastEditTime: 2020-06-01 14:03:02
 * @FilePath: \cesiumVueClean\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
