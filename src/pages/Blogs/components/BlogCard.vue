<script setup lang="ts">
defineProps({
  blog: Object
})
</script>

<template>
  <div class="group">
    <div class="project-image fancy-hover">
      <router-link
          :to="{
            path: blog.path,
            force: true
          }"
      >
        <div class="overflow-hidden cursor-pointer h-[235px]">
          <img
              :src="blog.image.path"
              :alt="blog.image.alt"
              class="w-full h-full object-cover"
          >
        </div>
      </router-link>
    </div>

    <router-link
        :to="{
           path: blog.path,
           force: true
        }"
        class="cursor-pointer"
    >
      <h2 class="description-text">
        {{ blog.title }}
      </h2>
      <p class="view-detail-btn">
        Read Blog
      </p>
    </router-link>
  </div>
</template>
