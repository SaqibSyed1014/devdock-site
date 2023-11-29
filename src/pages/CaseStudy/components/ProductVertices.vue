<script setup>
import ProductVertices from "@/core/components/SectionDetailsInGrid.vue";

defineProps({
  productVertices: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="mb-10">
    <ProductVertices
        :highlighted-text="productVertices.highlighted"
        :heading-text="productVertices.heading"
        heading-position="center"
        :show-image="false"
        :image="{ path: '', alt: '' }"
        :show-btn="false"
        :cards-data="productVertices.list"
    />
  </div>
</template>
