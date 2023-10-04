import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import Portfolio from '@/pages/Portfolio.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      title: '',
    },
    redirect: { name: 'Home' },
    children: [
      {
        path: '/',
        component: Home,
        name: 'Home'
      },
      {
        path: '/portfolio',
        component: Portfolio,
        name: 'Portfolio'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
