<template>
  <div class="bg-sky mb-7 sm:mb-12 lg:mb-20">
    <AppVideoPreview
        :show-btn="showBannerButton"
        :btn-text="bannerBtnText"
        :show-preview-heading="showBannerHeading"
    />
  </div>
</template>

<script setup lang="ts">
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";

defineProps<{
  showBannerButton: boolean;
  bannerBtnText?: string;
  showBannerHeading: boolean;
}>()
</script>
