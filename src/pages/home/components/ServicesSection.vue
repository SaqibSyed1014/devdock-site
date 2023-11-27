<template>
  <SectionWithFourBoxes
    :highlighted-text="serviceVertices.highlighted"
    :heading-text="serviceVertices.heading"
    heading-position="center"
    :show-image="true"
    :image="serviceVertices.image"
    :show-btn="true"
    :cards-data="serviceVertices.details"
  />
</template>

<script setup>
import SectionWithFourBoxes from "@/core/components/SectionDetailsInGrid.vue"

defineProps({
  serviceVertices: {
    type: Array,
    required: true
  }
})
</script>
