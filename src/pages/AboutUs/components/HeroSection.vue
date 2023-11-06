<script setup lang="ts">
import { heroSection } from "@/core/constants/about-us.ts";
</script>

<template>
  <header class="pb-16 md:pb-20 pt-[155px]">
    <div class="container text-center">
      <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6.2xl 2xl:text-8xl font-semibold text-primary"
      >
        {{ heroSection.heading }}
      </h1>
      <p class="text-base text-base-gray pt-7">
        {{ heroSection.text }}
      </p>

      <section class="grid lg:grid-cols-2 gap-5 lg:gap-20 pt-20 md:pt-32 text-primary">
        <div class="order-2 lg:order-1">
          <figure>
            <img :src="heroSection.ourMission.image" alt="DevDock Founders" class="mx-auto">
            <figcaption>{{ heroSection.ourMission.caption }}</figcaption>
          </figure>
        </div>
        <div class="order-1 lg:order-2 text-start">
          <h6 class="text-lg">{{ heroSection.ourMission.label }}</h6>
          <h3 class="text-2xl lg:text-3xl 2xl:text-5xl font-medium pt-3 md:pt-6 2xl:pt-10 pb-2 md:pb-4 2xl:pb-7">
            {{ heroSection.ourMission.heading }}
          </h3>
          <p>
            {{ heroSection.ourMission.text }}
          </p>

          <div class="flex flex-col sm:flex-row gap-10 pt-7 font-medium">
            <div class="w-48">
              <div class="bg-primary text-green rounded-[65px] flex gap-2 py-1 px-2 mb-1.5 w-fit">
                <span class="text-xl lg:text-2xl 2xl:text-3xl">
                  {{ heroSection.ourMission.startUp.startYear }}
                </span>
                <img :src="heroSection.ourMission.startUp.icon" alt="Curve Up">
              </div>
              <label>{{ heroSection.ourMission.startUp.label }}</label>
            </div>
            <div class="w-48">
              <div class="bg-green text-primary rounded-[65px] flex gap-2 py-1 px-2 mb-1.5 w-fit">
                <span class="text-xl lg:text-2xl 2xl:text-3xl">
                  {{ heroSection.ourMission.team.teamMembers }}
                </span>
                <img :src="heroSection.ourMission.team.icon" alt="Curve Up">
              </div>
              <label>{{ heroSection.ourMission.team.label }}</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>