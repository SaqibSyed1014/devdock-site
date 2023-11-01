<script setup lang="ts">
import {singleServiceDetails} from "@/core/constants/services.ts";
import SectionWithFourBoxes from "@/core/components/SectionDetailsInGrid.vue";
</script>

<template>
  <SectionWithFourBoxes
      highlighted-text=""
      heading-text="Our UI/UX Design Process"
      heading-position="top"
      :show-image="false"
      :show-btn="false"
      :cards-data="singleServiceDetails.uiux.details"
      :full-span-cell="7"
  />
</template>

<style scoped lang="scss">

</style>