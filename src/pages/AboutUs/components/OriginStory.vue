<script setup>
import pageData from "@/core/constants/about-us.json";

const originStoryData = pageData.originStoryContent
</script>

<template>
  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px] xl:w-2/4">
          {{ originStoryData.heading }}
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg">
        <template v-for="(content, index) in originStoryData.content" :key="index">
          <p class="py-5">
            {{ content }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>
