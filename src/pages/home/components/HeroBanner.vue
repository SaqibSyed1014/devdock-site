<template>
  <div class="bg-sky pb-7 sm:pb-12 lg:pb-20">
    <AppVideoPreview
        :show-btn="showBannerButton"
        :show-preview-heading="showBannerHeading"
    />
  </div>
</template>

<script setup lang="ts">
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";

defineProps<{
  showBannerButton: boolean;
  showBannerHeading: boolean;
}>()
</script>
