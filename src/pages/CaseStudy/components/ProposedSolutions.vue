<script setup>
import AppButton from "@/core/components/AppButton.vue";

defineProps({
  proposedSolution: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <small class="text-orange uppercase text-sm">Proposed changes</small>
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          "{{ proposedSolution.heading }}"
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg">
        <p class="py-5">
          <strong>
            {{ proposedSolution.highlightedText }}
          </strong>
        </p>

        <template v-for="(text) in proposedSolution.texts">
          <p class="pb-8">
            {{ text }}
          </p>
        </template>

        <div class="tech-stack-wrapper">
          <b class="text-2xl">
            Technology Stack
          </b>
          <div class="flex items-center flex-wrap gap-5 py-5">
            <div
                v-for="(stack, index) in proposedSolution.techStack"
                :key="index"
                class="text-center"
            >
              <div class="w-14 h-14 bg-sky grid place-items-center p-2">
                <img :src="stack.path" :alt="stack.alt">
              </div>
              <label class="text-xs">
                {{ stack.label }}
              </label>
            </div>
          </div>
        </div>

        <b class="text-2xl">Check this project:</b><br>
        <a :href="proposedSolution.url">
          <AppButton class="my-5">
            <span class="i-mdi-web w-5 h-5 mr-2"/>
            Visit Website
          </AppButton>
        </a>
      </div>
    </div>
  </div>
</template>
