import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Welcome from '../views/Welcome.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  }
]
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),routes
})
export default router