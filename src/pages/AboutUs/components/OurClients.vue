<script setup>
import {clientLogos} from "@/core/constants/home-view.ts";
</script>

<template>
  <section class="container pt-12 mb:pt-20 pb-7 md:pb-10">
    <p class="text-center text-xl md:text-2xl lg:text-3xl pb-7 lg:pb-12">We offer solutions for</p>
    <div class="flex flex-nowrap justify-center gap-56 whitespace-normal overflow-hidden py-6">
      <div class="flex gap-56 justify-around items-center horizontal-slider">
        <div v-for="(logo, index) in clientLogos" :key="index" class="transform scale-[1.8]">
          <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
        </div>
      </div>
      <div class="flex gap-56 justify-around items-center horizontal-slider">
        <div v-for="(logo, index) in clientLogos" :key="index" class="transform scale-[1.8]">
          <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.horizontal-slider{
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-name: HSlider;
  animation-play-state: running;
  animation-timing-function: linear;
  flex: 0 0 auto;
  flex-wrap: nowrap;
}
</style>