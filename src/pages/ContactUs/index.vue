<script setup>
import { contactEmail } from '@/core/constants/site-info'
import AppAvatar from "@/core/components/AppAvatar.vue";
import Parallaxy from '@lucien144/vue3-parallaxy';
import AppButton from "@/core/components/AppButton.vue";

import pageData from "@/core/constants/contact-us.json"

const contactData = pageData
</script>

<template>
  <section class="container text-primary pb-16 md:pb-20 pt-40">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="contact-details">
        <h1 class="section-heading hidden md:flex md:text-6.2xl !leading-tight font-semibold">
          <span>
            <img
                :src="contactData.headingImages[0].src"
                :alt="contactData.headingImages[0].alt"
                class="w-24"
            >
            {{ contactData.heading[0] }}
          </span>
          <span>
            {{ contactData.heading[1] }}
            <img
                :src="contactData.headingImages[1].src"
                :alt="contactData.headingImages[1].alt"
                class="w-24 rounded-[100px]"
            >
            <img
                :src="contactData.headingImages[2].src"
                :alt="contactData.headingImages[2].alt"
                class="w-24 rounded-[100px] ml-4"
            >
          </span>
        </h1>
        <h1 class="block md:hidden text-3xl sm:text-4xl font-semibold">
          {{ contactData.heading[0] }} {{ contactData.heading[1] }}
        </h1>
        <div class="text-md md:text-lg 2xl:text-xl py-3">
          <p class="pb-5">{{ contactData.text }}</p>
          <h2 class="font-bold text-xl 2xl:text-2xl">Address</h2>
          <address class="py-3 not-italic">
            {{ contactData.address }}
          </address>
          <p class="underline pb-3">
            Say👋 at
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
          </p>
          <h2 class="follow-prompt font-bold text-xl 2xl:text-2xl pt-5">Follow Us!</h2>

          <div class="social-links flex items-center gap-5 pb-5 pt-3">
            <template v-for="social in contactData.socialLinks">
              <a :href="social.link">
                <span
                  :class="[social.icon]"
                  class="w-7 h-7 2xl:w-10 2xl:h-10"
                />
              </a>
            </template>
          </div>

          <h2 class="font-bold text-xl 2xl:text-2xl">Our Experts</h2>
          <div class="team-members flex flex-wrap justify-around md:justify-start items-center gap-5 xss:gap-14 md:gap-10 lg:gap-8 pt-6">
            <template v-for="member in contactData.team">
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
            <img
                fetchpriority="high"
                class="parallax-effect"
                :src="contactData.banner.image"
                :alt="contactData.banner.alt"
            >
          </Parallaxy>

          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 text-white text-center">
            <h3 class="uppercase text-3xl 2xl:text-4xl md:text-5xl font-semibold">
              {{ contactData.banner.heading }}
            </h3>
            <p class="text-base md:text-xl 2xl:text-2xl pb-8">
              {{ contactData.banner.text }}
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