import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Welcome from '../views/Welcome.vue'
//import Home from '../components/HelloWorld.vue'
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
  history: createWebHashHistory(),
  routes
})

export default router
