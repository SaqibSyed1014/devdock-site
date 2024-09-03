import { createRouter, createWebHistory } from 'vue-router';
import routesData from "@/core/constants/routes.json";
import blogsData from "@/core/constants/blogs.json";

const routesMeta = routesData;
let blogsList = blogsData.blogs;

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
  const baseURL = window.location.origin;
  const { params } = to;

  // Extract meta data from route or default meta
  let title = to.meta.title || 'Default Title';
  let description = to.meta.description || 'Default Description';
  let keywords = to.meta.keywords || []; // Can be empty array

  // If route has specific meta for the current param value (e.g., /blog/:slug)
  if (to.meta[params?.title]) {
    title = to.meta[params?.title].title || title;
    description = to.meta[params?.title].description || description;
    keywords = to.meta[params?.title].keywords || keywords;
  }

  // Create or update meta tags
  updateMetaTag('title', title);
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords); // Join keywords into a comma-separated string
  updateMetaTag('canonical', `${baseURL}${to.path}`);

  updateOpenGraphMeta('title', title);
  updateOpenGraphMeta('description', description);
  updateOpenGraphMeta('url', `${baseURL}${to.path}`);

  if (to.path.includes('/blog')) {
    blogsList.forEach((blog) => {
      if (blog.path === to.path) {
        updateOpenGraphMeta('image', `${baseURL}${blog.image.path}`)
        updateOpenGraphMeta('twitter:image', `${baseURL}${blog.image.path}`)
      }
    })
  }else {
    updateOpenGraphMeta('image', 'https://www.devdock.tech/favicons/apple-touch-icon.png')
    updateOpenGraphMeta('twitter:image', 'https://www.devdock.tech/favicons/apple-touch-icon.png')
  }

  updateTwitterMeta('title', title);
  updateTwitterMeta('description', description);
});

// Helper function to create or update a meta tag
function updateMetaTag(name, content) {
    const newMeta = document.createElement('meta');
    newMeta.setAttribute('property', name);
    newMeta.content = content;
    document.head.appendChild(newMeta);
}

// Helper functions for specific Open Graph and Twitter meta tags
function updateOpenGraphMeta(property, content) {
  updateMetaTag(`og:${property}`, content);
}

function updateTwitterMeta(property, content) {
  updateMetaTag(`twitter:${property}`, content);
}

export default router
