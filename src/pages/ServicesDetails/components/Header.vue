<script setup>
import AppButton from "@/core/components/AppButton.vue";

defineProps({
  serviceHeader: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="container md:pb-20 pt-32 md:pt-[155px]">
    <div class="grid md:grid-cols-2 gap-16 md:gap-0 text-primary">
      <div class="col-span-1">
        <h1 class="text-3xl sm:text-4xl md:text-5xl 2xl:text-6.2xl font-semibold !leading-tight">
         {{ serviceHeader.heading }}
        </h1>
        <p class="py-5 pb-7">
          {{ serviceHeader.text }}
        </p>
        <AppButton>Direct Contact</AppButton>
        <div class="flex md:hidden xl:flex flex-wrap gap-4 md:gap-6 text-sm text-base-gray pt-10">
          <div class="flex items-center gap-2">
            <span class="i-bi-send w-5 h-5"/>
            <label>{{ serviceHeader.meta[0].label }}</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-icon-park-outline-new-computer w-5 h-5"/>
            <label>{{ serviceHeader.meta[1].label }}</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-ph-squares-four-light w-5 h-5"/>
            <label>{{ serviceHeader.meta[2].label }}</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-carbon-tools-alt w-5 h-5"/>
            <label>{{ serviceHeader.meta[3].label }}</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-carbon-tools-alt w-5 h-5"/>
            <label>{{ serviceHeader.meta[4].label }}</label>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex justify-center px-5 lg:px-16">
          <img
              :src="serviceHeader.image.path"
              :alt="serviceHeader.image.alt"
          >
        </div>
      </div>
    </div>

    <div class="hidden md:flex xl:hidden flex-wrap gap-4 md:gap-6 text-sm text-base-gray pt-10">
      <div class="flex items-center gap-2">
        <span class="i-bi-send w-5 h-5"/>
        <label>{{ serviceHeader.meta[0].label }}</label>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-icon-park-outline-new-computer w-5 h-5"/>
        <label>{{ serviceHeader.meta[1].label }}</label>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-ph-squares-four-light w-5 h-5"/>
        <label>{{ serviceHeader.meta[2].label }}</label>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-carbon-tools-alt w-5 h-5"/>
        <label>{{ serviceHeader.meta[3].label }}</label>
      </div>
      <div class="flex items-center gap-2">
        <span class="i-carbon-tools-alt w-5 h-5"/>
        <label>{{ serviceHeader.meta[4].label }}</label>
      </div>
    </div>
  </header>
</template>
