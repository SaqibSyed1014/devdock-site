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
  <header class="bg-sky pb-8 md:pb-14 pt-[155px]">
    <div class="container">
      <div class="md:w-3/4 lg:w-3/4 mx-auto text-center mb-20 md:mb-36">
        <h4 class="text-primary text-base opacity-8 font-bold">
          {{ headerContent.productName }}
        </h4>
        <h1 class="text-primary text-4xl md:text-6xl font-semibold">
          {{ headerContent.tagLine }}
        </h1>
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-base-gray pt-7">
          <template v-for="(meta) in headerContent.meta">
            <div class="flex items-center gap-2">
              <span :class="[meta.icon]" class="w-5 h-5"/>
              <label>
                {{ meta.label }}
              </label>
            </div>
          </template>
        </div>
      </div>
    </div>

    <AppVideoPreview
        :show-btn="false"
        :show-preview-heading="false"
    />
  </header>
</template>
