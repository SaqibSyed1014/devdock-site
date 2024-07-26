<script setup lang="ts">
defineProps({
  blogsHeader: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="container md:pb-20 pt-32 md:pt-[155px]">
    <div class="grid md:grid-cols-2 gap-16 md:gap-0 text-primary">
      <div class="col-span-1">
        <h1 class="section-title">
          {{ blogsHeader.heading }}
        </h1>
        <p class="py-5 pb-7">
          {{ blogsHeader.text }}
        </p>
      </div>
      <div class="col-span-1">
        <div class="flex justify-center md:px-5 lg:px-16">
          <img
              :src="blogsHeader.image.path"
              :alt="blogsHeader.image.alt"
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>
