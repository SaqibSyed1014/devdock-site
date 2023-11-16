<template>
  <section class="bg-sky pb-10 lg:py-16">
    <div class="container">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-5 text-primary">
        <p class="text-center lg:text-left sm:text-lg 2xl:text-xl">
          {{ testimonialSection.description }}
        </p>
        <div>
          <h2 class="sm:text-base 2xl:text-xl pb-6">
            {{ testimonialSection.text }}
          </h2>
          <hr>
          <div class="flex flex-nowrap whitespace-normal overflow-hidden py-6">
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index"  class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index" class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientLogos, testimonialSection } from "@/core/constants/home-view.ts";
</script>

<style scoped lang="scss">
.horizontal-slider{
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-name: HSlider;
  animation-play-state: running;
  animation-timing-function: linear;
  flex: 0 0 auto;
  flex-wrap: nowrap;
}

hr{
  border-top: 1px solid #BDEDFC;
}
</style>