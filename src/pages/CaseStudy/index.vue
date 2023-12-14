<script setup>
import Header from "@/pages/CaseStudy/components/Header.vue";
import BusinessChallenges from "@/pages/CaseStudy/components/BusinessChallenges.vue";
import AboutProduct from "@/pages/CaseStudy/components/AboutProduct.vue";
import ProductVertices from "@/pages/CaseStudy/components/ProductVertices.vue";
import ProposedSolutions from "@/pages/CaseStudy/components/ProposedSolutions.vue";
import CaseStudySlider from "@/pages/CaseStudy/components/CaseStudySlider.vue";
import CTA from "@/pages/CaseStudy/components/CTA.vue"
import SimilarCaseStudies from "@/pages/CaseStudy/components/SimilarCaseStudies.vue";
import pageData from "@/core/constants/case-studies.json";

const route = useRoute()
const selectedCaseStudy = pageData[route.params.title]
</script>

<template>
  <Header
    :header-content="selectedCaseStudy.header"
  />
  <BusinessChallenges
    :business-challenges-content="selectedCaseStudy.businessChallenges"
  />
  <AboutProduct
    :product-description="selectedCaseStudy.aboutProduct"
  />
  <ProductVertices
    :product-vertices="selectedCaseStudy.vertices"
  />
  <ProposedSolutions
    :proposed-solution="selectedCaseStudy.proposeSolutions"
  />
  <CaseStudySlider
    :product-images="selectedCaseStudy.comparison"
  />
  <CTA />
  <SimilarCaseStudies
    :recommendations="selectedCaseStudy.recommendations"
  />
</template>
