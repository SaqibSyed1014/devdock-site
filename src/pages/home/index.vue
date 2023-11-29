<script setup>
import Hero from '@/pages/home/components/Hero.vue'
import OurClients from "@/pages/home/components/OurClients.vue";
import HeroBanner from "@/pages/home/components/HeroBanner.vue";
import ServiceVertices from "@/pages/Services/components/ServiceVertices.vue";
import Features from '@/pages/home/components/Features.vue'
import Trust from '@/pages/home/components/Trust.vue'
import Reviews from '@/pages/home/components/Reviews.vue'
import pageData from "@/core/constants/home.json"
import { useRouter } from "vue-router";

const router = useRouter()
const homeData = pageData
</script>

<template>
  <Hero
    :hero-data="homeData.hero"
  />
  <OurClients />
  <HeroBanner
    :show-banner-button="true"
    :show-banner-heading="true"
  />
  <ServiceVertices />
  <Features />
  <Trust />
  <Reviews />
</template>
