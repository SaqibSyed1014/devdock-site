<template>
  <div class="flex flex-col border-b border-gray-200 rounded-[10px]" :class="[`bg-${color}`]">
    <div class="pt-10 pb-5 px-10">
      <img :src="`/img/clients/${logo}`" alt="Company Logo">
    </div>
    <hr class="border-t border-black opacity-1">
    <div class="py-5 px-10">
      <figure class="flex items-center gap-5">
        <img
            class="rounded-full w-18 h-18"
             :src="`/img/clients/${avatar}`"
             alt="Company CEO"
        >
        <figcaption class="space-y-0.5 text-black">
          <div class="text-[17px] font-medium text-[#212529]">
            {{ userName }}
          </div>
          <div class="text-[15px] opacity-5">
            {{ userDesc || 'N/A' }}
          </div>
        </figcaption>
      </figure>
      <blockquote class="text-sm sm:text-base pt-9 lg:pt-[50px] mx-auto mb-4">
        <p>“{{ reviews || 'N/A' }}”</p>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  color: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  userDesc: { type: String },
  reviews: { type: String }
})
</script>

<style scoped>
.bg-water{
  background: #D1F2FD;
}
.bg-calamansi{
  background: #FDFFAD;
}
.bg-lace{
  background: #FFDEF7;
}
</style>
