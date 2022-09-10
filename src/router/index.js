import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TitleList from '../views/TitleList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/titleList',
      name: 'titleList',
      component: TitleList
    }
  ]
})

export default router
