//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../Pages/Login/Login.vue'


//声明使用插件
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path:'/',
      //redirect 是重新定向
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/login',
      component:Login
    }
  ]
})