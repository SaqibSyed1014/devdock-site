<template>
  <div class="group cursor-pointer"
  >

      <img src="/svg/client_logo.svg" alt="Client Logo">
    <router-link :to="{ name: 'CaseStudy' }">
      <div
          class="project-image fancy-hover border border-dark-gray rounded hover:border-dark-gray/0 transition-all my-3 md:my-5"
      >
        <div class="overflow-hidden">
          <img src="/public/img/mockup.png" alt="Project Mockup Image">
        </div>
      </div>
    </router-link>

    <p class="text-base md:text-xl 2xl:text-2xl font-medium pb-1 md:pb-1.5">
      {{ content.desc }}
    </p>
    <span
        class="text-sm md:text-base text-base-gray 2xl:text-xl hover:text-pink transition cursor-pointer"
    >
      <router-link :to="{ name: 'CaseStudy' }">
        View Case Study
      </router-link>
    </span>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>
