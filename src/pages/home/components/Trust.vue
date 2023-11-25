<script setup>
import sectionData from "@/core/constants/home.json"

const builtTrustSection = sectionData.trustSection
</script>

<template>
  <section class="container pb-10 pt-20 md:pt-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="flex flex-col justify-center">
        <h2 class="text-3xl sm:text-5xl text-center lg:text-left font-medium text-primary !leading-normal">
          {{ builtTrustSection.heading }}
          <span class="rounded-[100px] bg-primary px-5 text-white">
            {{ builtTrustSection.badgeText }}
          </span>
        </h2>
        <div class="grid grid-cols-3 gap-5 pt-9">
          <div
              v-for="(tech, index) in builtTrustSection.techStack"
              :class="[`col-span-${tech.col}`]"
              :key="index"
          >
            <img :src="tech.name" :alt="tech.alt">
          </div>
        </div>
      </div>
      <div>
        <div class="w-3/4 lg:w-full mx-auto">
          <img
              :src="builtTrustSection.image.path"
              :alt="builtTrustSection.image.alt"
              class="mx-auto align-top"
          >
        </div>
      </div>
    </div>
  </section>
</template>
