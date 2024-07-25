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
            name: 'DevDockBlogs',
            force: true
          }"
      >
        <div class="overflow-hidden cursor-pointer">
          <img
              src="/img/blogs/blog-image.png"
              alt="content?.image.alt"
          >
        </div>
      </router-link>
    </div>

    <router-link
        :to="{
           name: 'DevDockBlogs',
           force: true
        }"
        class="cursor-pointer"
    >
      <h2 class="description-text">
        <span v-for="text in blog.title" class="block">{{ text }}</span>
      </h2>
      <p class="view-detail-btn">
        Read Blog
      </p>
    </router-link>
  </div>
</template>

<style scoped lang="scss">

</style>
