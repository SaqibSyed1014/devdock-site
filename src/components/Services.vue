<template>
  <section class="bg-primary">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center justify-center py-28 md:py-[149px]">
        <div class="w-full max-w-md px-2">
          <img src="/public/img/arrow.svg" alt="Up Arrow">
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
                    <img class="group-hover:hidden" :src="`/img/${service.icon}`" :alt="service.alt">
                    <div class="flex gap-3 xl:gap-8 justify-between items-center pt-5">
                      <h3 class="text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-medium sm:pr-5 transition group-hover:text-black group-hover:mb-2">
                        {{ service.title }}
                      </h3>
                      <span class="i-mdi-arrow-right w-9 h-9 md:w-12 md:h-12 transition group-hover:hidden" />
                    </div>
                    <p class="text-black text-sm leading-6 md:leading-7 hidden transition group-hover:block">
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

const servicesData = [
  { title: 'Design Research', desc: 'We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.', icon: 'capital.svg', alt: 'Settings Icon' },
  { title: 'Product Development', desc: 'As a renowned team of expert front-end, backend, and full stack developers, we tackle complex market challenges innovatively, pragmatically, and with a touch of unpredictability.', icon: 'software.svg', alt: 'Software Icon' },
  { title: 'SEO & Marketing', desc: 'Our experts collaborate with you to define goals and craft a strategy encompassing blogger outreach and cutting-edge content marketing. Our SEO services team can supplement your content optimization, or we can serve as your dedicated outreach squad', icon: 'capital.svg', alt: 'Reels Icon' },
  { title: 'Life Time Support', desc: 'Even once the development process is complete and your app is ready to launch, our guidance does not stop there. DevDock is here to make sure that you have access to the support required to execute a successful launch.', icon: 'strategy.svg', alt: 'Strategy Icon' }
]
</script>

<style scoped>

</style>
