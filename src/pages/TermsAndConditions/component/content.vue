<script setup>
import pageData from "@/core/constants/terms.json"

const termsAndConditions = pageData.termsAndConditions
</script>

<template>
  <article class="container pb-10 pt-[155px]">
    <template
        v-for="(section, index) in termsAndConditions"
        :key="index"
    >
      <h2 class="font-bold text-xl md:text-2xl 2xl:text3xl py-3">
        {{ section.heading }}
      </h2>
      <template
          v-for="(text, i) in section.text"
          :key="i"
      >
        <p class="pb-5">
          {{ text }}
        </p>
      </template>
    </template>
  </article>
</template>
