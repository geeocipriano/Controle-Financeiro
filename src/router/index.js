import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Financeiro from '../views/Financeiro.vue'
import Produtos from '../views/Produtos.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Financeiro',
    name: 'Financeiro',
    component: Financeiro
  },
  {
    path: '/Produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
