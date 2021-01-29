import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginHome from '../views/Login/LoginHome.vue'
import Home from '../views/common/Home.vue'
import TheMenu from '../views/common/TheMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginHome
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: LoginHome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'TheMenu',
    component: TheMenu
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
