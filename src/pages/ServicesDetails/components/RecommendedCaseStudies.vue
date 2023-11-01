<script setup lang="ts">
import {singleServiceDetails} from "@/core/constants/services.ts";
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";

const caseStudyGrid = computed(() => {
  return `sm:grid-cols-${ singleServiceDetails.uiux.caseStudies.length/2}`
})
</script>

<template>
  <section class="container py-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:pt-5">
        <h3 class="text-3xl sm:text-5xl font-semibold text-primary">
          Our Great Case Studies
        </h3>
      </div>
      <div class="grid-cols-1 md:col-span-2">
        <div class="grid gap-x-5 gap-y-10" :class="[caseStudyGrid]">
          <template v-for="caseStudy in singleServiceDetails.uiux.caseStudies">
            <AppPortfolioCard
                :content="caseStudy"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>