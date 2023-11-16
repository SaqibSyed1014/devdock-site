<template>
  <div class="flex flex-col border-b border-gray-200 rounded-[10px]" :class="[`bg-${details.color}`]">
    <div class="pt-10 pb-5 px-10">
      <img
          :src="details.logo.path"
          :alt="details.logo.alt">
    </div>
    <hr class="border-t border-black opacity-1">
    <div class="py-5 px-10">
      <figure class="flex items-center gap-5">
        <img
            class="rounded-full w-18 h-18"
             :src="details.avatar.path"
             :alt="details.avatar.alt"
        >
        <figcaption class="space-y-0.5 text-black">
          <div class="text-[17px] 2xl:text-xl font-medium text-[#212529]">
            {{ details.name }}
          </div>
          <div class="text-[15px] 2xl:text-lg opacity-5">
            {{ details.desc || 'N/A' }}
          </div>
        </figcaption>
      </figure>
      <blockquote class="text-sm sm:text-base 2xl:text-xl pt-9 lg:pt-[50px] mx-auto mb-4">
        <p>“{{ details.review || 'N/A' }}”</p>
      </blockquote>
    </div>
  </div>
</template>

<script setup>
defineProps({
  details: {
    type: Object,
    required: true
  }
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
