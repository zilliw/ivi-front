import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginHome from '../views/Login/LoginHome.vue'
import Home from '../views/common/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: LoginHome,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: LoginHome,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
