<script setup>
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";
import portfolioPageData from "@/core/constants/portfolio.json";
const portfolioFilters = portfolioPageData.portfolioFilters

defineProps({
  recommendations: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="py-10 md:pb-28 md:pt-20 2xl:pt-20">
      <h3 class="text-primary text-4xl md:text-6xl !leading-tight font-semibold text-center">
        Explore Similar Endeavors
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-14 pt-20">
        <template
            v-for="(content, i) in recommendations"
            :key="i"
        >
          <AppPortfolioCard
              :content="content"
          />
        </template>
      </div>
    </div>
  </div>
</template>
