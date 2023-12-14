<script setup>
import HeroSection from "@/pages/Services/components/HeroSection.vue";
import OurClients from "@/pages/home/components/OurClients.vue";
import HeroBanner from "@/pages/home/components/HeroBanner.vue";
import ServiceVertices from "@/pages/Services/components/ServiceVertices.vue";
import Trust from '@/pages/home/components/Trust.vue'
import Reviews from '@/pages/home/components/Reviews.vue'
</script>

<template>
  <HeroSection />
  <OurClients />
  <HeroBanner
      :show-banner-button="false"
      :show-banner-heading="false"
  />
  <ServiceVertices />
  <Trust />
  <Reviews />
</template>
