import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import AdminHome from '../views/admin-views/HomePage.vue'
import Dashboard from '../views/admin-views/DashboardPage.vue'
import Customer from '../views/admin-views/CustomerPage.vue'
import CustomerAdd from '../views/admin-views/CustomerAddPage.vue'




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
    name: 'AdminHome',
    component : AdminHome
  },

  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component : Dashboard
  },
  
  {
    path: '/admin/customers',
    name: 'Customer',
    component : Customer
  },

  {
    path: '/admin/customers/add',
    name: 'CustomerAdd',
    component : CustomerAdd
  }
]

const router = new VueRouter({
  routes
})

export default router
