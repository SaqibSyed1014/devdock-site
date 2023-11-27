<script setup>
import SectionDetailsInGrid from "@/core/components/SectionDetailsInGrid.vue";
import pageData from "@/core/constants/about-us.json";

const coreValuesData = pageData.coreValuesContent
</script>

<template>
  <SectionDetailsInGrid
      :highlighted-text="coreValuesData.highlightedText"
      :heading-text="coreValuesData.heading"
      heading-position="center"
      :show-image="true"
      :image="coreValuesData.image"
      :show-btn="false"
      :cards-data="coreValuesData.details"
  />
</template>
