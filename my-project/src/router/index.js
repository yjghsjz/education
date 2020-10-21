import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Main from '@/page/main'
import User from '@/page/user'
import Login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/main', 
        name: 'Main',
        component: Main
      },{
        path: '/user',
        name: 'User',
        component: User
      }]
    }
  ]
})
