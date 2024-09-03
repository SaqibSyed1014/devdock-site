<script setup lang="ts">
import PortfolioFilters from "@/pages/Portfolio/components/PortfolioFilters.vue";
import CtaSection from "@/pages/Portfolio/components/CtaSection.vue";
import pageData from "@/core/constants/portfolio.json"
import { useSeoMeta } from 'unhead'
// import {  } from '@unhead/schema'

const portfolioData = pageData;

useSeoMeta({
  title: 'DevDock Portfolio | Software Design and Development Company',
  description: 'Explore DevDock portfolio – a showcase of our exceptional web, app, and software development and designed projects. Witness innovation in action.',
  ogDescription: 'Explore DevDock portfolio – a showcase of our exceptional web, app, and software development and designed projects. Witness innovation in action.',
  ogTitle: 'DevDock Portfolio | Software Design and Development Company',
  ogImage: '/img/blogs/blog-six/header-img.webp',
})
</script>

<template>
  <div class="text-primary py-16 md:py-24 lg:py-28">
    <PortfolioFilters
        :header-data="portfolioData.heading"
        :portfolio-filters="portfolioData.portfolioFilters"
    />
    <cta-section :cta-section-data="portfolioData.ctaSection" />
  </div>
</template>
