<script setup lang="ts">
import type { ComputedRef } from "vue";
import BlogCard from "@/pages/Blogs/components/BlogCard.vue";
import pageData from "@/core/constants/blogs.json";
import { Blog } from "@/core/types/blogs.type.ts";

const props = defineProps<{
  recentBlogsIndex: number[]
}>()

const recentBlogs :ComputedRef<Blog[]> = computed(() => {
  const recentBlogsList :Blog[] = []
  props.recentBlogsIndex.forEach((index) => {
    recentBlogsList.push(pageData.blogs[index - 1])
  })
  return recentBlogsList;
})
</script>

<template>
  <section class="recent-blogs py-20">
    <div class="container">
      <div class="flex flex-col items-center gap-10 md:gap-16">
        <h2 class="section-title">Recent Blogs</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-y-14">
          <template v-for="blog in recentBlogs">
            <BlogCard :blog="blog" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
