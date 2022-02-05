import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Admin from '../views/AdminPage.vue'
import Team from '../views/Team.vue'
import Projects from '../views/Projects.vue'
import PlantShop from '../views/PlantShop.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component : Login
  },

  {
    path: '/admin',
    name: 'Admin',
    component : Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
