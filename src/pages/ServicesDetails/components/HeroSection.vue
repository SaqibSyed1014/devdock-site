<script setup lang="ts">

import AppButton from "@/core/components/AppButton.vue";
</script>

<template>
  <header class="container pb-10 pt-[155px]">
    <div class="grid md:grid-cols-2 gap-10 md:gap-0">
      <div class="col-span-1 text-primary">
        <h1 class="text-3xl sm:text-4xl md:text-6.2xl font-semibold !leading-tight">
          Crafting UI/UX Magic for Unforgettable User Experiences
        </h1>
        <p class="py-5 pb-7">
          Elevate Engagement with Captivating Interfaces, Seamless Navigation, and Enhanced Digital Presence.
        </p>
        <AppButton>Direct Contact</AppButton>
        <div class="flex flex-wrap gap-4 md:gap-6 text-sm text-base-gray pt-10">
          <div class="flex items-center gap-2">
            <span class="i-bi-send w-5 h-5"/>
            <label>Product Design</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-icon-park-outline-new-computer w-5 h-5"/>
            <label>UX Audit</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-ph-squares-four-light w-5 h-5"/>
            <label>Redesign</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-carbon-tools-alt w-5 h-5"/>
            <label>Design System</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-carbon-tools-alt w-5 h-5"/>
            <label>Web Design</label>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div>
          <img src="/img/services/uiux/header_img.webp" alt="Header Image">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>