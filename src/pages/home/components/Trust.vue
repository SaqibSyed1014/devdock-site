<template>
  <section class="container pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 class="text-3xl sm:text-5xl text-center lg:text-left font-medium text-primary !leading-normal">
          {{ trustHeading }}
          <span class="rounded-[100px] bg-primary px-5 text-white">{{ siteName }}</span>
        </h3>
        <div class="grid grid-cols-3 gap-5 pt-9">
          <div v-for="(image, index) in techStack" :class="{'col-span-2': techStack.length -1 === index}" :key="index">
            <img :src="`/img/stack/${image.name}`" :alt="image.alt">
          </div>
        </div>
      </div>
      <div>
        <div class="w-3/4 lg:w-full mx-auto">
          <img src="/public/img/deal.png" alt="Deal">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteName } from "@/core/constants/site-info";
import { techStack, trustHeading } from "@/core/constants/home-view";
</script>
