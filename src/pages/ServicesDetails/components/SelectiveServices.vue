<script setup lang="ts">
import {singleServiceDetails} from "@/core/constants/services.ts";
</script>

<template>
  <section class="container py-10 md:py-20">
    <div class="grid lg:grid-cols-3 gap-10 md:gap-5">
      <div class="lg:col-span-1">
        <h2 class="text-3xl md:text-4xl 2xl:text-5xl text-primary font-semibold">
          The Power-Packed UI UX Design Services
        </h2>
      </div>
      <div class="lg:col-span-2">
        <div class="selective-services grid md:grid-cols-2 gap-6">
          <div class="service-card rounded-[20px] px-6 py-12 bg-pink">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h4 class="font-bold text-xl md:text-2xl">
                  {{ singleServiceDetails.uiux.selectiveServices[0].title }}
                </h4>
                <p class="pt-6">{{ singleServiceDetails.uiux.selectiveServices[0].description }}</p>
              </div>
              <div class="flex flex-wrap gap-9">
                <template v-for="stack in singleServiceDetails.uiux.selectiveServices[0].stack">
                  <img :src="`/svg/softwares/${stack}`" :alt="stack">
                </template>
              </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-yellow">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h4 class="font-bold text-xl md:text-2xl">
                  {{ singleServiceDetails.uiux.selectiveServices[1].title }}
                </h4>
                <p class="pt-6">{{ singleServiceDetails.uiux.selectiveServices[1].description }}</p>
              </div>
            <div class="flex flex-wrap gap-9">
              <template v-for="stack in singleServiceDetails.uiux.selectiveServices[1].stack">
                <img :src="`/svg/softwares/${stack}`" :alt="stack">
              </template>
            </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-green">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h4 class="font-bold text-xl md:text-2xl">
                  {{ singleServiceDetails.uiux.selectiveServices[2].title }}
                </h4>
                <p class="pt-6">{{ singleServiceDetails.uiux.selectiveServices[2].description }}</p></div>
                <div class="flex flex-wrap gap-9">
                  <template v-for="stack in singleServiceDetails.uiux.selectiveServices[2].stack">
                    <img :src="`/svg/softwares/${stack}`" :alt="stack">
                  </template>
                </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-orange">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h4 class="font-bold text-xl md:text-2xl">
                 {{ singleServiceDetails.uiux.selectiveServices[3].title }}
                </h4>
                <p class="pt-6">{{ singleServiceDetails.uiux.selectiveServices[3].description }}</p>
              </div>
              <div class="flex flex-wrap gap-5">
                <template v-for="stack in singleServiceDetails.uiux.selectiveServices[3].stack">
                  <img :src="`/svg/softwares/${stack}`" :alt="stack">
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>