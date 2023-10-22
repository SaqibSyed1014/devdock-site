<script setup lang="ts">
import Hero from '@/pages/home/components/Hero.vue'
import Testimonials from '@/pages/home/components/Testimonials.vue'
import Services from '@/pages/home/components/ServicesSection.vue'
import Features from '@/pages/home/components/Features.vue'
import Trust from '@/pages/home/components/Trust.vue'
import Reviews from '@/pages/home/components/Reviews.vue'
// import Test from "@/pages/home/components/Test.vue";
</script>

<template>
  <smooth-page>
  <Hero />
  <Testimonials />
  <Services />
<!--  <Test />-->
  <Features />
  <Trust />
  <Reviews />
  </smooth-page>
</template>
