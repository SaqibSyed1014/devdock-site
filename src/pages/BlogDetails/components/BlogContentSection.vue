<script setup lang="ts">
defineProps<{
  heading: string
  headingId: string
}>()
</script>

<template>
  <section class="blog-content-section">
    <h3 v-if="heading.length" :id="headingId">
      {{ heading }}
    </h3>

    <slot />
  </section>

</template>
