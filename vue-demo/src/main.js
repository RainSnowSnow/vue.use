// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/classes/vue-use'
// 引入
import validate from './components/validate'
import test from './components/test'
// 使用
Vue.use(validate)
Vue.config.productionTip = false
Vue.use(test)
Vue.myGlobalMethod()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
