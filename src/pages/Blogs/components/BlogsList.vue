<script setup lang="ts">
import BlogCard from "@/pages/Blogs/components/BlogCard.vue";

const blogs = [
  {
    title: ["Tech Trends:", "Your Guide to the Future"],
    image: "/img/blogs/blog-image.png",
    alt: "Tech Trends: Your Guide to the Future",
  },
  {
    title: ["Innovation Ignition:", "Sparking Digital Ideas"],
    image: "/img/blogs/blog-image.png",
    alt: "Tech Trends: Your Guide to the Future",
  },
  {
    title: ["Code Craft:", "Unraveling the World of Programming"],
    image: "/img/blogs/blog-image.png",
    alt: "Tech Trends: Your Guide to the Future",
  },
  {
    title: ["Network Nirvana:", "Building Strong Digital Connections"],
    image: "/img/blogs/blog-image.png",
    alt: "Tech Trends: Your Guide to the Future",
  },
  {
    title: ["Tech Tuesday:", "Your Weekly Dose of Tech News"],
    image: "/img/blogs/blog-image.png",
    alt: "Tech Trends: Your Guide to the Future",
  },
];
</script>

<template>
  <section class="pt-20 pb-32">
    <div class="container">
      <div class="flex flex-col items-center gap-16">
        <h2 class="text-[43px] leading-[64px]">Blogs</h2>

        <div class="grid grid-cols-3 gap-x-5 gap-y-14">
          <template v-for="blog in blogs">
            <BlogCard :blog="blog" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
