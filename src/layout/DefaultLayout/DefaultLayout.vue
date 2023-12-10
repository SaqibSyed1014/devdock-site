<script setup>
import NavBar from '@/layout/DefaultLayout/components/NavBar.vue'
import Footer from '@/layout/DefaultLayout/components/Footer.vue'
import ScrollToTop from "@/layout/DefaultLayout/components/ScrollToTop.vue";
</script>

<template>
  <div class="relative">
    <NavBar />
    <router-view />
    <Footer />
    <ScrollToTop />
  </div>
</template>
