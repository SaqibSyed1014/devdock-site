<script setup lang="ts">
import SectionWithFourBoxes from "@/core/components/SectionDetailsInGrid.vue";

defineProps({
  serviceVertices: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <SectionWithFourBoxes
      highlighted-text=""
      :heading-text="serviceVertices.heading"
      heading-position="top"
      :show-image="false"
      :show-btn="false"
      :cards-data="serviceVertices.list"
      :full-span-cell="7"
  />
</template>
