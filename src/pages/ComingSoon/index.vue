<script setup lang="ts">
import siteInfo from "@/core/constants/site-info.json"
import contactData from "@/core/constants/contact-us.json";

const socialLinks = contactData.socialLinks

</script>

<template>
  <div class="bg-white h-screen bg-[url(/img/bg-pattern.png)] bg-no-repeat bg-center">
    <div class="flex justify-center items-center h-full w-full text-center px-4">
      <div class="flex flex-col items-center gap-8 md:gap-[50px]">
        <div class="w-[180px] md:w-[240px] flex justify-center">
          <img :src="siteInfo.logoUrl" :alt="siteInfo.siteName" class="w-full h-full object-contain">
        </div>
        <div>
          <p class="uppercase italic font-bold text-lg lg:text-xl">We are</p>
          <h1 class="text-5xl md:text-6xl lg:text-8xl">Cooking our website</h1>
        </div>
        <div class="flex flex-col items-center gap-4 md:gap-[27px]">
          <p class="max-w-[350px] w-full">
            We are going to relaunch our website Very Soon.
            Stay Tune.
          </p>
          <div class="footer-banner relative rounded-[10px] overflow-hidden py-6 md:py-9 px-5 md:px-8">
          <div class="banner-bg"/>
          <div class="flex justify-center items-center lg:mr-0 gap-4 relative z-11">
            <template v-for="social in socialLinks">
              <a
                  :href="social.link"
                  target="_blank"
                  class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10 xl:w-12 xl:h-12"
              >
                          <span
                              class="text-xl xl:text-2xl text-primary"
                              :class="[`icon-${social.icon}`]"
                          />
              </a>
            </template>
          </div>
        </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>
