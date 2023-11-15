<script setup lang="ts">
import SectionDetailsInGrid from "@/core/components/SectionDetailsInGrid.vue";
import pageData from "@/core/constants/about-us.json";

const coreValuesData = pageData.coreValuesContent
</script>

<template>
  <SectionDetailsInGrid
      :highlighted-text="coreValuesData.highlightedText"
      :heading-text="coreValuesData.heading"
      heading-position="center"
      :show-image="false"
      :show-btn="false"
      :cards-data="coreValuesData.details"
  />
</template>
