import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout/DefaultLayout.vue'
import Home from '@/pages/home/index.vue'
import Portfolio from '@/pages/Portfolio/index.vue'
import CaseStudy from '@/pages/CaseStudy/index.vue'
import ContactUs from '@/pages/ContactUs/index.vue'
import Services from '@/pages/Services/index.vue'
import ServiceDetails from '@/pages/ServicesDetails/index.vue'
import AboutUs from '@/pages/AboutUs/index.vue'
import routesData from "@/core/constants/routes.json"
const routesMeta = routesData

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    name: 'SiteDefaultLayout',
    meta: {
      title: '',
    },
    redirect: { name: 'DevDockHome' },
    children: [
      {
        ...routesMeta.Home,
        component: Home,
      },
      {
        ...routesMeta.Portfolio,
        component: Portfolio,
      },
      {
        ...routesMeta.CaseStudy,
        component: CaseStudy,
      },
      {
        ...routesMeta.ContactUs,
        component: ContactUs,
      },
      {
        ...routesMeta.Services,
        component: Services,
      },
      {
        ...routesMeta.Service,
        component: ServiceDetails,
      },
      {
        ...routesMeta.AboutUs,
        component: AboutUs,
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

router.beforeEach((to) => {
  const { params } = to
  let { title, description, keywords } = to.meta
  if (to.meta[params?.title]) {
    title = to.meta[params?.title].title
    description = to.meta[params?.title].description
    keywords = to.meta[params?.title].keywords
  }
  document.title = title
  document.querySelector('meta[name="description"]').setAttribute('content', description)
  document.querySelector('meta[name="keywords"]').setAttribute('content', keywords)
})

export default router
