<script setup lang="ts">
import Hero from '@/pages/home/components/Hero.vue'
import OurClients from "@/pages/home/components/OurClients.vue";
import HeroBanner from "@/pages/home/components/HeroBanner.vue";
import Services from '@/pages/home/components/ServicesSection.vue'
import Features from '@/pages/home/components/Features.vue'
import Trust from '@/pages/home/components/Trust.vue'
import Reviews from '@/pages/home/components/Reviews.vue'
</script>

<template>
  <Hero />
  <OurClients />
  <HeroBanner
    :show-banner-button="true"
    :show-banner-heading="true"
  />
  <Services />
  <Features />
  <Trust />
  <Reviews />
</template>
