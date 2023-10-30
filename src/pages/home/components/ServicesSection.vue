<template>
  <SectionWithFourBoxes
    :highlighted-text="siteName"
    :heading-text="servicesHeading"
    :show-btn="true"
    :cards-data="servicesData"
  />
</template>

<script setup lang="ts">
import { siteName } from "@/core/constants/site-info.ts";
import { servicesData, servicesHeading } from "@/core/constants/home-view.ts";
import SectionWithFourBoxes from "@/core/components/SectionWithFourBoxes.vue"
</script>
