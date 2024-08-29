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
        component: () => import('@/pages/Blogs/index.vue'),
      },
      {
        ...routesData.MustHaveAiToolsForGraphicDesign2024Blog,
        component: () => import('@/pages/BlogDetails/blogs/MustHaveAiToolsForGraphicDesign2024.vue'),
      },
      {
        ...routesData.MasterThe5StepDesignBriefForTopTierOutcomes,
        component: () => import('@/pages/BlogDetails/blogs/MasterThe5StepDesignBriefForTopTierOutcome.vue'),
      },
      {
        ...routesData.WebDesignVsWebDevelopment,
        component: () => import('@/pages/BlogDetails/blogs/WebDesignVsWebDevelopment.vue'),
      },
      {
        ...routesData.WhyBigBrandsInvestInUniqueFonts,
        component: () => import('@/pages/BlogDetails/blogs/WhyBigBrandsInvestInUniqueFonts.vue'),
      },
      {
        ...routesData.AvoidTheseUXDesignMistakesIn2024,
        component: () => import('@/pages/BlogDetails/blogs/AvoidTheseUXDesignMistakesIn2024.vue'),
      },
      {
        ...routesData.EfficientDesignProjectManagement,
        component: () => import('@/pages/BlogDetails/blogs/EfficientDesignProjectManagement.vue'),
      },
      {
        ...routesData.ArtworkManagementEssentialsFor2024,
        component: () => import('@/pages/BlogDetails/blogs/ArtworkManagementEssentialsFor2024.vue'),
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
  document.querySelector('meta[property="og:title"]').setAttribute('content', title)
  document.querySelector('meta[property="og:description"]').setAttribute('content', description)
  document.querySelector('meta[property="og:url"]').setAttribute('href', to.path)
  document.querySelector('meta[property="og:image"]').setAttribute('href', 'https://www.devdock.tech/favicons/apple-touch-icon.png')
})

export default router
