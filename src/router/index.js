import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Cookies from 'js-cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // guard route
      beforeEnter() {
        if (Cookies.get('currentUser') || sessionStorage.getItem('currentUser')) {
        } else {
          router.push('login')
          // block navigation
          return false
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
