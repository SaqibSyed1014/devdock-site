import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
import Home from '@/pages/home/HomeView.vue'
import Portfolio from '@/pages/portfolio/PortfolioView.vue'

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
