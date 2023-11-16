<script setup lang="ts">
import Header from "@/pages/ServicesDetails/components/Header.vue";
import Description from "@/pages/ServicesDetails/components/Description.vue";
import SelectiveServices from "@/pages/ServicesDetails/components/SelectiveServices.vue";
import ServicesDescriptions from "@/pages/ServicesDetails/components/ServiceDescription.vue";
import Features from '@/pages/home/components/Features.vue'
import RecommendedCaseStudies from "@/pages/ServicesDetails/components/RecommendedCaseStudies.vue";
import ServiceFAQs from "@/pages/ServicesDetails/components/ServiceFAQs.vue";
import pageData from "@/core/constants/services.json"

const route = useRoute()
const selectedService = pageData[route.params.title]
// console.log('test', route.params.title, selectedService)
</script>

<template>
  <Header :service-header="selectedService.header" />
  <Description :service-description="selectedService.description"  />
  <SelectiveServices :selected-services="selectedService.selectiveServices" />
  <ServicesDescriptions :service-vertices="selectedService.vertices" />
  <Features />
  <RecommendedCaseStudies :service-case-studies="selectedService.caseStudies" />
  <ServiceFAQs :service-faqs="selectedService.faqs" />
</template>
