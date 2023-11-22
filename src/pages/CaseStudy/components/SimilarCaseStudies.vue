<script setup>
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";
import portfolioPageData from "@/core/constants/portfolio.json";
const portfolioFilters = portfolioPageData.portfolioFilters

</script>

<template>
  <div class="container">
    <div class="py-10 md:py-28">
      <h3 class="text-primary text-4xl md:text-6xl font-semibold text-center">
        Explore Similar Endeavors
      </h3>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 pt-20">
        <template
            v-for="(content, i) in portfolioFilters[1].content"
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
