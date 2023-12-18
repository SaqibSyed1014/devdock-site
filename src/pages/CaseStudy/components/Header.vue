<script setup>
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";

defineProps({
  headerContent: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="bg-sky pb-10 md:pb-20 pt-[155px]">
    <div class="container">
      <div class="md:w-3/4 lg:w-3/4 mx-auto text-center">
        <h1 class="text-primary text-base 2xl:text-xl opacity-8 font-bold pb-3">
          {{ headerContent.productName }}
        </h1>
        <h2 class="header-heading capitalize mx-auto">
          {{ headerContent.tagLine }}
        </h2>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm 2xl:text-base text-base-gray pt-7">
           <div class="flex items-center gap-2">
             <span class="i-bi-send w-5 h-5"/>
             <label>{{ headerContent.meta[0].label }}</label>
           </div>
           <div class="flex items-center gap-2">
             <span class="i-icon-park-outline-new-computer w-5 h-5"/>
             <label>{{ headerContent.meta[1].label }}</label>
           </div>
           <div class="flex items-center gap-2">
             <span class="i-ph-squares-four-light w-5 h-5"/>
             <label>{{ headerContent.meta[2].label }}</label>
           </div>
           <div class="flex items-center gap-2">
             <span class="i-carbon-tools-alt w-5 h-5"/>
             <label>{{ headerContent.meta[3].label }}</label>
           </div>
        </div>
      </div>
    </div>

<!--    <AppVideoPreview-->
<!--        :show-btn="false"-->
<!--        :show-preview-heading="false"-->
<!--    />-->
  </header>
</template>
