<script setup lang="ts">
import NavBar from '@/layout/DefaultLayout/components/NavBar.vue'
import Footer from '@/layout/DefaultLayout/components/Footer.vue'
</script>

<template>
  <div class="">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>
