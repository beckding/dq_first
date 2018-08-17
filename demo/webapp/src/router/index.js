import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Test from '@/components/Test'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name:'Layout',
      component:Layout,
      children:[
        {
          path: 'Test2',
          name: 'Test2',
          component: Test2
        },
        {
          path:'Test',
          name:'Test',
          component:Test
        }
      ]
    }

  ]
})
