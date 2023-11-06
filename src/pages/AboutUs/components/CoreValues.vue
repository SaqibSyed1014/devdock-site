<script setup lang="ts">
import { coreValuesSection } from "@/core/constants/about-us.ts";
import SectionDetailsInGrid from "@/core/components/SectionDetailsInGrid.vue";
</script>

<template>
  <SectionDetailsInGrid
      :highlighted-text="coreValuesSection.highlightedText"
      :heading-text="coreValuesSection.heading"
      heading-position="center"
      :show-image="false"
      :show-btn="false"
      :cards-data="coreValuesSection.details"
  />
</template>

<style scoped lang="scss">

</style>