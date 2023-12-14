<script setup>
import pageData from "@/core/constants/about-us.json";
import Parallaxy from '@lucien144/vue3-parallaxy';

const heroSectionData = pageData.heroSectionContent
</script>

<template>
  <header class="pb-14 md:pb-20 pt-[155px] 2xl:pt-44">
    <div class="container text-center">
      <h1 class="header-heading">
        {{ heroSectionData.heading }}
      </h1>
      <p class="text-base text-base-gray pt-7">
        {{ heroSectionData.text }}
      </p>

      <section class="mission-statement grid lg:grid-cols-2 gap-14 sm:gap-20 pt-20 md:pt-32 text-primary">
        <div class="order-2 lg:order-1">
          <figure>
            <div class="images-wrapper">
              <div class="left-image">
                <Parallaxy :speed="90">
                  <img
                      :src="heroSectionData.ourMission.founderImages[0].image"
                      :alt="heroSectionData.ourMission.founderImages[0].alt"
                      class="mx-auto"
                  >
                </Parallaxy>
              </div>
              <img
                  :src="heroSectionData.ourMission.founderImages[1].image"
                  :alt="heroSectionData.ourMission.founderImages[1].alt"
                  class="center-image mx-auto"
              >
              <div class="right-image">
                <Parallaxy :speed="90">
                  <img
                      :src="heroSectionData.ourMission.founderImages[2].image"
                      :alt="heroSectionData.ourMission.founderImages[2].alt"
                      class="mx-auto"
                  >
                </Parallaxy>
              </div>
            </div>
            <figcaption>{{ heroSectionData.ourMission.caption }}</figcaption>
          </figure>
        </div>
        <div class="order-1 lg:order-2 text-start">
          <p class="text-lg">{{ heroSectionData.ourMission.label }}</p>
          <h3 class="text-2xl lg:text-3xl 2xl:text-5xl font-medium pt-3 md:pt-6 2xl:pt-10 pb-2 md:pb-4 2xl:pb-7">
            {{ heroSectionData.ourMission.heading }}
          </h3>
          <p>
            {{ heroSectionData.ourMission.text }}
          </p>

          <div class="flex flex-col sm:flex-row gap-10 pt-7 font-medium">
            <div class="w-48">
              <div class="bg-primary text-green rounded-[65px] flex gap-2 py-1 px-2 mb-1.5 w-fit">
                <span class="text-xl lg:text-2xl 2xl:text-3xl">
                  {{ heroSectionData.ourMission.startUp.startYear }}
                </span>
                <img :src="heroSectionData.ourMission.startUp.icon" alt="Curve Up">
              </div>
              <label>{{ heroSectionData.ourMission.startUp.label }}</label>
            </div>
            <div class="w-48">
              <div class="bg-green text-primary rounded-[65px] flex gap-2 py-1 px-2 mb-1.5 w-fit">
                <span class="text-xl lg:text-2xl 2xl:text-3xl">
                  {{ heroSectionData.ourMission.team.teamMembers }}
                </span>
                <img :src="heroSectionData.ourMission.team.icon" alt="Curve Up">
              </div>
              <label>{{ heroSectionData.ourMission.team.label }}</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
</template>

<style scoped lang="scss">
.mission-statement{
  .images-wrapper {
    position: relative;
    .left-image, .right-image{
      position: absolute;
      z-index: 11;
      width: 25%;
      @media(min-width: theme('screens.xss')) {
        width: 25%;
      }
      @media(min-width: theme('screens.sm')) {
        width: 25%;
      }
      @media(min-width: theme('screens.lg')) {
        width: 35%;
      }
      @media(min-width: theme('screens.xl')) {
        width: 25%;
      }
    }
    .left-image {
      left: 8%;
      bottom: 0;
      transform: rotate(-10deg);
      @media(min-width: theme('screens.xss')) {
        left: 8%;
      }
      @media(min-width: theme('screens.sm')) {
        left: 8%;
      }
      @media(min-width: theme('screens.lg')) {
        left: -8%;
      }
      @media(min-width: theme('screens.xl')) {
        left: 5%;
      }
    }

    .center-image {
      margin: auto;
      z-index: 1;
      width: 60%;
      @media(min-width: theme('screens.xss')) {
        width: 60%;
      }
      @media(min-width: theme('screens.sm')) {
        width: 55%;
      }
      @media(min-width: theme('screens.lg')) {
        width: 75%;
      }
      @media(min-width: theme('screens.xl')) {
        width: 60%;
      }
    }

    .right-image {
      right: 8%;
      top: 15%;
      transform: rotate(10deg);
      @media(min-width: theme('screens.xss')) {
        right: 8%;
      }
      @media(min-width: theme('screens.sm')) {
        right: 8%;
      }
      @media(min-width: theme('screens.lg')) {
        right: -8%;
      }
      @media(min-width: theme('screens.xl')) {
        right: 5%;
      }
    }
  }
  figcaption{
    padding-top: 3rem;
  }
}
</style>