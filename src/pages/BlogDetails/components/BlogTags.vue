<script setup lang="ts">
defineProps<{
  blogTags: string[]
}>()
</script>

<template>
  <hr class="border border-[#F1F1F1] w-full my-11">

  <div class="blog-tags">
    <div class="flex flex-wrap items-center gap-2 md:text-lg">
      <p class="font-semibold mr-2">Tags:</p>
      <template v-for="tag in blogTags" :key="tag">
        <div class="bg-[#F1F1F1] rounded-[20px] px-5 py-1">
          <span>{{ tag }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
