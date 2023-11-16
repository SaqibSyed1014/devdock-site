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
  <header class="container pb-10 pt-[155px]">
    <div class="grid md:grid-cols-2 gap-10 md:gap-0">
      <div class="col-span-1 text-primary">
        <h1 class="text-3xl sm:text-4xl md:text-6.2xl font-semibold !leading-tight">
         {{ serviceHeader.heading }}
        </h1>
        <p class="py-5 pb-7">
          {{ serviceHeader.text }}
        </p>
        <AppButton>Direct Contact</AppButton>
        <div class="flex flex-wrap gap-4 md:gap-6 text-sm text-base-gray pt-10">
          <template v-for="(meta, index) in serviceHeader.meta" :key="index">
            <div class="flex items-center gap-2">
              <span :class="[meta.icon]" class="w-5 h-5"/>
              <label>{{ meta.label }}</label>
            </div>
          </template>
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
