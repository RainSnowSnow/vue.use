import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(iview)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
