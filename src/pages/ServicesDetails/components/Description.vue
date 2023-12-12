<script setup>
defineProps({
  serviceDescription: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="bg-sky pt-10 md:pt-20">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10 text-primary">
        <div class="col-span-1">
          <h2 class="text-3xl sm:text-4xl md:text-5xl 2xl:text-6.2xl font-semibold !leading-tight lg:pb-10">
            {{ serviceDescription.heading }}
          </h2>

          <div class="w-fit bg-orange rounded-t-[40px] hidden lg:block mt-10 overflow-hidden">
            <img
                :src="serviceDescription.image.path"
                :alt="serviceDescription.image.alt"
            >
          </div>
        </div>
        <div class="col-span-2 lg:pl-14 lg:text-lg">
          <p class="py-5">
            {{ serviceDescription.text }}
          </p>
          <ul class="list-disc ml-8">
            <template v-for="(point, index) in serviceDescription.bullets" :key="index">
              <li>{{ point }}</li>
            </template>
          </ul>

          <div class="w-fit mx-auto bg-orange rounded-t-[40px] block lg:hidden mt-10 overflow-hidden">
            <img
                :src="serviceDescription.image.path"
                :alt="serviceDescription.image.alt"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
