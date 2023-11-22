<script setup>
defineProps({
  businessChallengesContent: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <small class="text-orange text-sm">ClIENT & BUSINESS CHALLENGE</small>
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          “{{ businessChallengesContent.heading }}”
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg">
        <p class="text-primary py-5">
          <b>
            {{ businessChallengesContent.highlightedText }}
          </b>
        </p>

        <template v-for="(text) in businessChallengesContent.texts">
          <p>{{ text }}</p>
        </template>
      </div>
    </div>
  </div>
</template>
