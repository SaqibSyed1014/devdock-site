<template>
  <section class="bg-sky pb-10 lg:py-16">
    <div class="container lg:mb-20">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-5 text-primary">
        <p class="text-center lg:text-left sm:text-lg 2xl:text-xl">
          {{ testimonailSection.description }}
        </p>
        <div>
          <p class="sm:text-base 2xl:text-xl pb-6">
            {{ testimonailSection.text }}
          </p>
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
    <AppVideoPreview
        :show-btn="true"
        :show-preview-heading="true"
    />
  </section>
</template>

<script setup lang="ts">
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";
import { testimonailSection, clientLogos } from "@/core/constants/home-view.ts";
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
