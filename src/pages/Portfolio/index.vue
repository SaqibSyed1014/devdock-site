<script setup>
import PortfolioFilters from "@/pages/Portfolio/components/PortfolioFilters.vue";
import CtaSection from "@/pages/Portfolio/components/CtaSection.vue";
import pageData from "@/core/constants/portfolio.json"

const portfolioData = pageData
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
