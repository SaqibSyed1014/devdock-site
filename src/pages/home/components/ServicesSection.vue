<template>
  <SectionWithFourBoxes
    :highlighted-text="siteName"
    :heading-text="servicesHeading"
    heading-position="center"
    :show-image="true"
    :show-btn="true"
    :cards-data="servicesData"
    full-span-cell="none"
  />
</template>

<script setup lang="ts">
import { siteName } from "@/core/constants/site-info.ts";
import { servicesData, servicesHeading } from "@/core/constants/home-view.ts";
import SectionWithFourBoxes from "@/core/components/SectionDetailsInGrid.vue"
</script>
