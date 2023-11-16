import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
import Home from '@/pages/home/index.vue'
import Portfolio from '@/pages/Portfolio/index.vue'
import CaseStudy from '@/pages/CaseStudy/index.vue'
import ContactUs from '@/pages/ContactUs/index.vue'
import Services from '@/pages/Services/index.vue'
import ServiceDetails from '@/pages/ServicesDetails/index.vue'
import AboutUs from '@/pages/AboutUs/index.vue'

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
      },
      {
        path: '/service/:title?',
        component: ServiceDetails,
        name: 'SiteServiceDetails'
      },
      {
        path: '/about-us',
        component: AboutUs,
        name: 'AboutUs'
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
