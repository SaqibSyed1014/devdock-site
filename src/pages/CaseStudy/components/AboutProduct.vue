<script setup>
defineProps({
  productDescription: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-sky">
    <div class="container py-10 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
        <div class="col-span-1 font-semibold">
          <small class="text-orange text-sm">PROJECT DESCRIPTION</small>
          <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
            {{ productDescription.heading }}
          </h5>
        </div>
        <div class="col-span-2 lg:pl-14 lg:text-lg">
          <p class="py-5">
            {{ productDescription.texts[0] }}
          </p>
          <ul class="list-disc ml-8">
            <template v-for="(point, index) in productDescription.bullets" :key="index">
              <li>{{ point }}</li>
            </template>
          </ul>
          <p class="py-5">
            {{ productDescription.texts[1] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
