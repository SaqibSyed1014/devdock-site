<template>
  <section class="bg-primary">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center justify-center py-24 md:py-[149px]">
        <div class="w-full max-w-md px-2">
          <img src="/public/svg/arrow.svg" alt="Up Arrow">
          <h2 class="mb-8 text-white text-3xl md:text-5xl">
            <span class="text-secondary">DevDock</span> works with Companies and
            supports startups in four critical ways.
          </h2>
          <AppButton secondary>Direct Contact</AppButton>
        </div>
      </div>
      <div class="services-grid">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <template v-for="(service, index) in servicesData" :key="index">
            <div
                class="group border-2 border-b-0 border-x-0 sm:border-x-2 border-white border-opacity-50 cursor-pointer transition hover:bg-secondary"
                :class="[index % 2 === 0 ? 'sm:border-r-0':'']"
            >
              <div class="flex items-center h-72 sm:h-[400px] px-3 sm:px-7 md:px-[21px]">
                <div class="text-white flex-1">
                  <span class="text-4xl md:text-[53px] transition group-hover:text-primary opacity-2">
                    {{ `${index + 1}.` }}
                  </span>
                  <div class="pt-10 transition group-hover:pt-10">
                    <img class="group-hover:hidden" :src="`/svg/${service.icon}`" :alt="service.alt">
                    <div class="flex gap-3 xl:gap-8 justify-between items-center pt-5">
                      <h3 class="text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-medium sm:pr-5 transition group-hover:text-black group-hover:mb-2">
                        {{ service.title }}
                      </h3>
                      <span class="i-mdi-arrow-right w-9 h-9 md:w-12 md:h-12 transition group-hover:hidden" />
                    </div>
                    <p class="text-black text-sm 2xl:text-lg leading-6 md:leading-7 hidden transition group-hover:block">
                      {{ service.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import AppButton from "@/core/components/AppButton.vue";
import { servicesData } from "@/core/constants/home-view";
</script>

<style scoped>

</style>
