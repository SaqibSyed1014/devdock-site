<script setup lang="ts">
defineProps<{
  subHeading: string
  subHeadingId: string
}>()
</script>

<template>
  <div class="blog-content-block">
    <h4 v-if="subHeading.length" :id="subHeadingId">
      {{ subHeading }}
    </h4>

    <slot />
  </div>
</template>

