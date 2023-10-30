import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
import Home from '@/pages/home/index.vue'
import Portfolio from '@/pages/Portfolio/PortfolioView.vue'
import CaseStudy from '@/pages/CaseStudy/index.vue'
import ContactUs from '@/pages/ContactUs/index.vue'
import Services from '@/pages/Services/index.vue'

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
        path: '/Portfolio',
        component: Portfolio,
        name: 'SitePortfolio'
      },
      {
        path: '/case-study',
        component: CaseStudy,
        name: 'CaseStudy'
      },
      {
        path: '/contact-us',
        component: ContactUs,
        name: 'ContactUs'
      },
      {
        path: '/services',
        component: Services,
        name: 'SiteServices'
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
