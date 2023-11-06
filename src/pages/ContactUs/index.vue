<script setup lang="ts">
import { sectionData, teamMembers } from '@/core/constants/contact-us'
import { contactEmail } from '@/core/constants/site-info'
import AppAvatar from "@/core/components/AppAvatar.vue";
import Parallaxy from '@lucien144/vue3-parallaxy';
import AppButton from "@/core/components/AppButton.vue";
</script>

<template>
  <section class="container text-primary pb-16 md:pb-20 pt-40">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="contact-details">
        <h1 class="section-heading hidden md:flex md:text-6.2xl !leading-tight font-semibold">
          <span>
            <img
                :src="sectionData.headingImages[0].src"
                :alt="sectionData.headingImages[0].alt"
                class="w-24"
            >
            {{ sectionData.heading[0] }}
          </span>
          <span>
            {{ sectionData.heading[1] }}
            <img
                :src="sectionData.headingImages[1].src"
                :alt="sectionData.headingImages[1].alt"
                class="w-24 rounded-[100px]"
            >
            <img
                :src="sectionData.headingImages[2].src"
                :alt="sectionData.headingImages[2].alt"
                class="w-24 rounded-[100px] ml-4"
            >
          </span>
        </h1>
        <h1 class="block md:hidden text-3xl sm:text-4xl font-semibold">
          {{ sectionData.heading[0] }} {{ sectionData.heading[1] }}
        </h1>
        <div class="text-md md:text-lg 2xl:text-xl py-3">
          <p class="pb-5">{{ sectionData.text }}</p>
          <strong class="text-xl 2xl:text-2xl">Address</strong>
          <address class="py-3 not-italic">
            {{ sectionData.address }}
          </address>
          <p class="underline pb-3">
            Say👋 at
            <a :href="`mail:${contactEmail}`">{{ contactEmail }}</a>
          </p>
          <strong class="follow-prompt text-xl 2xl:text-2xl pt-5">Follow Us!</strong>

          <div class="social-links flex items-center gap-5 pb-5 pt-3">
            <span class="i-mdi-twitter w-6 h-6 2xl:w-10 2xl:h-10" />
            <span class="i-uil-facebook w-6 h-6 2xl:w-10 2xl:h-10" />
            <span class="i-mdi-linkedin w-6 h-6 2xl:w-10 2xl:h-10" />
            <span class="i-uil-instagram w-6 h-6 2xl:w-10 2xl:h-10" />
          </div>

          <strong class="text-xl 2xl:text-2xl">Our Experts</strong>
          <div class="team-members flex flex-wrap items-center gap-5 pt-6">
            <template v-for="member in teamMembers">
              <AppAvatar
                  :user-name="member.name"
                  :role="member.designation"
                  :user-image="member.image"
                  :bg-color="member.bgColor"
                  :hover-disabled="false"
                  size="md"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="contact-banner">
        <div class="relative rounded-[10px] overflow-hidden mx-auto">
          <Parallaxy :speed="90" direction="opposite">
            <img fetchpriority="high" class="parallax-effect" src="/img/rocket-portrait.webp" alt="Rocket">
          </Parallaxy>

          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 text-white text-center">
            <h3 class="uppercase text-3xl 2xl:text-4xl md:text-5xl font-semibold">
              {{ sectionData.asideSection.heading }}
            </h3>
            <p class="text-base md:text-xl 2xl:text-2xl pb-8">
              {{ sectionData.asideSection.text }}
            </p>
            <AppButton>Direct Contact</AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-heading{
  flex-direction: column;
  justify-content: center;
  img{
    display: inline-block;
    flex-shrink: 0;
    vertical-align: baseline;
  }
}
.follow-prompt{
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    width: 27px;
    height: 17px;
    position: absolute;
    bottom: 5px;
    right: -40px;
    display: block;
    background-image: url("/svg/point_arrow.svg");
  }
}
img.parallax-effect{
  margin: auto;
  transform: scale(1.2);
  transition: transform .95s cubic-bezier(.25,.46,.45,.94);
  &:hover{
    transform: scale(1.3);
  }
}
.social-links span{
  cursor: pointer;
}
</style>