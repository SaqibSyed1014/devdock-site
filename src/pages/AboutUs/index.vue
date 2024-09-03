<script setup>
import Header from "@/pages/AboutUs/components/Header.vue";
import OriginStory from "@/pages/AboutUs/components/OriginStory.vue";
import CoreValues from "@/pages/AboutUs/components/CoreValues.vue";
import OurTeam from "@/pages/AboutUs/components/OurTeam.vue";
import TargetClients from "@/pages/AboutUs/components/TargetClients.vue";
import Reviews from "@/pages/home/components/Reviews.vue";
import Features from "@/pages/home/components/Features.vue";
import {useSeoMeta} from "unhead";
import routeData from "@/core/constants/routes.json";

const routeMeta = routeData.AboutUs;

setTimeout(() => {
  useSeoMeta({
    title: routeMeta.meta.title,
    description: routeMeta.meta.description,
    ogDescription:routeMeta.meta.description,
    ogTitle: routeMeta.meta.title,
    ogImage: `${window.location.origin}/img/blogs/blog-three/header-img.webp`,
  })
}, 2000);

</script>

<template>
  <Header />
  <OriginStory />
  <CoreValues />
  <OurTeam />
  <TargetClients />
  <Features />
  <Reviews />
</template>
