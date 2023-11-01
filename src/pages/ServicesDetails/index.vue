<script setup lang="ts">
import HeroSection from "@/pages/ServicesDetails/components/HeroSection.vue";
import MoreDetails from "@/pages/ServicesDetails/components/MoreDetails.vue";
import SelectiveServices from "@/pages/ServicesDetails/components/SelectiveServices.vue";
import ServicesDescriptions from "@/pages/ServicesDetails/components/ServiceDescription.vue";
import Features from '@/pages/home/components/Features.vue'
import RecommendedCaseStudies from "@/pages/ServicesDetails/components/RecommendedCaseStudies.vue";
import ServiceFAQs from "@/pages/ServicesDetails/components/ServiceFAQs.vue";
</script>

<template>
  <HeroSection />
  <MoreDetails />
  <SelectiveServices />
  <ServicesDescriptions />
  <Features />
  <RecommendedCaseStudies />
  <ServiceFAQs />
</template>

<style scoped lang="scss">

</style>