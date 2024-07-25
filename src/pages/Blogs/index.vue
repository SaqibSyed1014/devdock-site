<script setup lang="ts">
import Header from "@/pages/Blogs/components/Header.vue";
import pageData from "@/core/constants/blogs.json"
import CTA from "@/pages/CaseStudy/components/CTA.vue";
import BlogsList from "@/pages/Blogs/components/BlogsList.vue";

const homeData = pageData;
</script>

<template>
  <Header :blogs-header="homeData.headerContent" />
  <BlogsList />
  <CTA />
</template>

<style scoped lang="scss">

</style>
