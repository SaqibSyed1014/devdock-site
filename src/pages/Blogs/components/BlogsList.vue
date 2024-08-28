<script setup lang="ts">
import BlogCard from "@/pages/Blogs/components/BlogCard.vue";
import pageData from '@/core/constants/blogs.json';

const blogsList = pageData.blogs;
</script>

<template>
  <section class="py-20">
    <div class="container">
      <div class="flex flex-col items-center gap-10 md:gap-16">
        <h2 class="section-title">Blogs</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-y-14">
          <template v-for="blog in blogsList">
            <BlogCard :blog="blog" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
