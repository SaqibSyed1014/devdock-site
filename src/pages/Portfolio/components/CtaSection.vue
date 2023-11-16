<script setup>
import AppButton from "@/core/components/AppButton.vue";

defineProps({
  ctaSectionData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 pt-20 md:pt-14">
      <div class="flex flex-col text-center justify-center sm:px-10">
        <h2 class="text-3xl md:text-4xl 2xl:text-5xl font-bold w-3/4 md:w-2/4 mx-auto">
          {{ ctaSectionData.heading }}
        </h2>
        <div class="py-8">
          <img class="mx-auto" src="/public/svg/curve.svg" alt="Curve Underline">
        </div>
        <p class="text-base md:text-xl 2xl:text-2xl">{{ ctaSectionData.text }}</p>
        <div>
          <AppButton class="mt-10">Direct Contact</AppButton>
        </div>
      </div>
      <div>
        <img :src="ctaSectionData.image" :alt="ctaSectionData.alt">
      </div>
    </div>
  </div>
</template>
