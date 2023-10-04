import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import Portfolio from '@/pages/Portfolio.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    name: 'SiteDefaultLayout',
    meta: {
      title: '',
    },
    redirect: { name: 'SiteHome' },
    children: [
      {
        path: '/',
        component: Home,
        name: 'SiteHome'
      },
      {
        path: '/portfolio',
        component: Portfolio,
        name: 'SitePortfolio'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
