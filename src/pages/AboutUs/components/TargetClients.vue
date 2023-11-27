<script setup>
import pageData from "@/core/constants/about-us.json";

const offerSolutionsData = pageData.offerSolutionsContent
</script>

<template>
  <section class="pt-12 mb:pt-20 pb-7 md:pb-10">
    <div class="container">
      <p class="text-center text-xl md:text-2xl lg:text-3xl pb-7 lg:pb-12">
        {{ offerSolutionsData.heading }}
      </p>
    </div>

    <div class="flex flex-nowrap justify-center whitespace-normal overflow-hidden py-6">
      <div class="flex first justify-around items-center horizontal-slider">
        <template v-for="(business, index) in offerSolutionsData.businesses" :key="index">
            <h4 class="text-accent-light-gray text-center font-bold text-4xl md:text-5xl 2xl:text-8xl px-20 md:px-24 lg:px-32">
              #{{ business }}
            </h4>
        </template>
      </div>
      <div class="flex second justify-around items-center horizontal-slider">
        <template v-for="(business, i) in offerSolutionsData.businesses" :key="i">
            <h4 class="text-accent-light-gray text-center font-bold text-4xl md:text-5xl 2xl:text-8xl px-20 md:px-24 lg:px-32">
              #{{ business }}
            </h4>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.horizontal-slider{
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-name: HSlider;
  animation-play-state: running;
  animation-timing-function: linear;
  flex: 0 0 auto;
  flex-wrap: nowrap;
}
</style>