<script setup>
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";

const props = defineProps({
  serviceCaseStudies: {
    type: Object,
    required: true
  }
})

const caseStudyGrid = computed(() => {
  if (props.serviceCaseStudies?.list.length < 2) return 'sm:grid-cols-2'
  return `sm:grid-cols-${ props.serviceCaseStudies?.list.length/2 }`
})
</script>

<template>
  <section class="container py-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:pt-5">
        <h2 class="text-3xl sm:text-4xl md:text-5xl 2xl:text-6.2xl font-semibold !leading-tight text-primary">
          {{ serviceCaseStudies.heading }}
        </h2>
      </div>
      <div class="grid-cols-1 md:col-span-2">
        <div class="grid gap-x-5 gap-y-10" :class="[caseStudyGrid]">
          <template v-for="caseStudy in serviceCaseStudies.list">
            <AppPortfolioCard
                :content="caseStudy"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
