<script setup>
import NavBar from '@/layout/DefaultLayout/components/NavBar.vue'
import Footer from '@/layout/DefaultLayout/components/Footer.vue'
import ScrollToTop from "@/layout/DefaultLayout/components/ScrollToTop.vue";
import ContactForm from "@/layout/DefaultLayout/components/ContactForm.vue";
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="relative">
    <NavBar />
    <router-view />
    <Footer />
    <ScrollToTop />
    <ContactForm />
  </div>
</template>
