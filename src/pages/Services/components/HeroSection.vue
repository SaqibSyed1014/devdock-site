<script setup lang="ts">
import { mainHeadingAndData } from "@/core/constants/services.ts";
</script>

<template>
  <header class="bg-sky pb-16 md:pb-20 pt-[155px]">
    <div class="container text-primary text-center">
      <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6.2xl 2xl:text-8xl font-semibold lg:px-40"
      >
        {{ mainHeadingAndData.heading }}
      </h1>
      <div class="flex justify-center flex-wrap md:flex-nowrap gap-4 md:gap-6 text-sm text-base-gray pt-5">
        <div class="flex items-center gap-2">
          <span class="i-bi-send w-5 h-5"/>
          <label>UI/UX</label>
        </div>
        <div class="flex items-center gap-2">
          <span class="i-icon-park-outline-new-computer w-5 h-5" />
          <label>Web Development</label>
        </div>
        <div class="flex items-center gap-2">
          <span class="i-ph-squares-four-light w-5 h-5" />
          <label>Native Applications</label>
        </div>
        <div class="flex items-center gap-2">
          <span class="i-carbon-tools-alt w-5 h-5" />
          <label>SEO</label>
        </div>
        <div class="flex items-center gap-2">
          <span class="i-carbon-tools-alt w-5 h-5" />
          <label>Social Media Designs</label>
        </div>
      </div>
    </div>
  </header>
</template>
