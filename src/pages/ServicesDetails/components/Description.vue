<script setup>
defineProps({
  serviceDescription: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container bg-sky py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1">
        <h2 class="text-primary text-3xl md:text-5xl font-semibold md:leading-[64px] lg:pb-10">
          {{ serviceDescription.heading }}
        </h2>

        <div class="bg-orange rounded-t-[40px] px-3 pt-1 hidden lg:block">
          <img src="/img/services/uiux/discover_image.webp" alt="Mobile Image">
        </div>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg text-primary">
        <p class="py-5">
          {{ serviceDescription.text }}
        </p>
        <ul class="list-disc ml-8">
          <template v-for="(point, index) in serviceDescription.bullets" :key="index">
            <li>{{ point }}</li>
          </template>
        </ul>

        <div class="bg-orange rounded-t-[40px] px-3 pt-1 block lg:hidden mt-10">
          <img src="/img/services/uiux/discover_image.webp" alt="Mobile Image">
        </div>
      </div>
    </div>
  </div>
</template>
