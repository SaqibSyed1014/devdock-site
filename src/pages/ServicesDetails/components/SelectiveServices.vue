<script setup lang="ts">
defineProps({
  selectedServices: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="container py-14 md:py-20">
    <div class="grid lg:grid-cols-3 gap-10 md:gap-5 text-primary">
      <div class="lg:col-span-1">
        <h2 class="text-3xl sm:text-4xl md:text-5xl 2xl:text-6.2xl font-semibold !leading-tight">
          {{ selectedServices.heading }}
        </h2>
      </div>
      <div class="lg:col-span-2">
        <div class="selective-services grid md:grid-cols-2 gap-6">
          <div class="service-card rounded-[20px] px-6 py-12 bg-pink">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h3 class="font-bold text-xl md:text-2xl">
                  {{ selectedServices.list[0].title }}
                </h3>
                <p class="pt-6">{{ selectedServices.list[0].description }}</p>
              </div>
              <div class="flex flex-wrap gap-9">
                <template v-for="stack in selectedServices.list[0].stack">
                  <div class="service-stack">
                    <img
                        :src="`/img/services/stack-illustrations/${stack}`"
                        :alt="stack"
                        loading="lazy"
                    >
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-yellow">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h3 class="font-bold text-xl md:text-2xl">
                  {{ selectedServices.list[1].title }}
                </h3>
                <p class="pt-6">{{ selectedServices.list[1].description }}</p>
              </div>
            <div class="flex flex-wrap gap-9">
              <template v-for="stack in selectedServices.list[1].stack">
                <div class="service-stack">
                  <img
                      :src="`/img/services/stack-illustrations/${stack}`"
                      :alt="stack"
                      loading="lazy"
                  >
                </div>
              </template>
            </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-green">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h3 class="font-bold text-xl md:text-2xl">
                  {{ selectedServices.list[2].title }}
                </h3>
                <p class="pt-6">{{ selectedServices.list[2].description }}</p></div>
                <div class="flex flex-wrap gap-9">
                  <template v-for="stack in selectedServices.list[2].stack">
                    <div class="service-stack">
                      <img
                        :src="`/img/services/stack-illustrations/${stack}`"
                        :alt="stack"
                        loading="lazy"
                      >
                    </div>
                  </template>
                </div>
            </div>
          </div>
          <div class="service-card rounded-[20px] px-6 py-12 bg-orange">
            <div class="flex flex-col gap-16 md:gap-24 justify-between h-full">
              <div>
                <h3 class="font-bold text-xl md:text-2xl">
                 {{ selectedServices.list[3].title }}
                </h3>
                <p class="pt-6">{{ selectedServices.list[3].description }}</p>
              </div>
              <div class="flex flex-wrap gap-9">
                <template v-for="stack in selectedServices.list[3].stack">
                  <div class="service-stack">
                    <img
                        :src="`/img/services/stack-illustrations/${stack}`"
                        :alt="stack"
                        loading="lazy"
                    >
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.service-stack{
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
