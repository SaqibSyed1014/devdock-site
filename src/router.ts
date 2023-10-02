import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout.vue'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      title: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'Home'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
