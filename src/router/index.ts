import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Whitepaper from "../views/Whitepaper.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/whitepaper',
    name: 'Whitepaper',
    component: Whitepaper
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
