<script setup>
import Header from "@/pages/ServicesDetails/components/Header.vue";
import Description from "@/pages/ServicesDetails/components/Description.vue";
import SelectiveServices from "@/pages/ServicesDetails/components/SelectiveServices.vue";
import Vertices from "@/pages/ServicesDetails/components/Vertices.vue";
import Features from '@/pages/home/components/Features.vue'
import RecommendedCaseStudies from "@/pages/ServicesDetails/components/RecommendedCaseStudies.vue";
import Faqs from "@/pages/ServicesDetails/components/Faqs.vue";
import pageData from "@/core/constants/services.json"

const route = useRoute()
const selectedService = pageData[route.params.title]
</script>

<template>
  <Header :service-header="selectedService.header" />
  <Description :service-description="selectedService.description"  />
  <SelectiveServices :selected-services="selectedService.selectiveServices" />
  <Vertices :service-vertices="selectedService.vertices" />
  <Features />
  <RecommendedCaseStudies :service-case-studies="selectedService.caseStudies" />
  <Faqs :service-faqs="selectedService.faqs" />
</template>
