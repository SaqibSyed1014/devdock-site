import { createRouter, createWebHistory } from 'vue-router'

import routesData from "@/core/constants/routes.json"
const routesMeta = routesData

const routes = [
  {
    path: '/',
    component: () => import('@/layout/DefaultLayout/DefaultLayout.vue'),
    name: 'SiteDefaultLayout',
    meta: {
      title: '',
    },
    redirect: { name: 'DevDockHome' },
    children: [
      {
        ...routesMeta.Home,
        component: () => import('@/pages/home/index.vue')
      },
      {
        ...routesMeta.Portfolio,
        component: () => import('@/pages/Portfolio/index.vue')
      },
      {
        ...routesMeta.CaseStudy,
        component: () => import('@/pages/CaseStudy/index.vue')
      },
      {
        ...routesMeta.ContactUs,
        component: () => import('@/pages/ContactUs/index.vue')
      },
      {
        ...routesMeta.Services,
        component: () => import('@/pages/Services/index.vue')
      },
      {
        ...routesMeta.Service,
        component: () => import('@/pages/ServicesDetails/index.vue')
      },
      {
        ...routesMeta.Blogs,
        component: () => import('@/pages/Blogs/index.vue')
      },
      {
        ...routesMeta.AboutUs,
        component: () => import('@/pages/AboutUs/index.vue')
      },
      {
        ...routesMeta.TermsAndCondition,
        component: () => import('@/pages/TermsAndConditions/index.vue')
      },
      {
        ...routesMeta.PrivacyPolicy,
        component: () => import('@/pages/PrivacyPolicy/index.vue')
      },
      {
        ...routesMeta.NotFound,
        component: () => import('@/pages/404NotFound/index.vue')
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
  document.querySelector('meta[name="keywords"]').setAttribute('content', keywords)
  document.querySelector('link[rel="canonical"]').setAttribute('href', to.path)
})

export default router
