<template>
  <footer class="bg-primary pt-14">
    <div class="footer-banner relative rounded-[10px] relative overflow-hidden py-4 px-4 md:px-7 mx-3 sm:mx-10">
      <div class="CTO" />
      <div class="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 relative z-11">
        <div class="flex items-center">
          <img class="hidden md:block" src="/svg/right_arrow.svg" alt="Arrow">
          <p class="text-center md:text-left text-primary font-medium text-xl sm:text-2xl md:text-[32px] md:pl-[15px]">
            Help us spread the word and sell good vibes. Follow!</p>
        </div>
        <div class="flex mx-auto lg:mr-0 gap-4 text-primary">
          <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
            <span class="i-ri-facebook-fill w-6 h-6" />
          </div>
          <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
            <span class="i-mdi-twitter w-6 h-6" />
          </div>
          <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
            <span class="i-ri-instagram-fill w-6 h-6" />
          </div>
          <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
            <span class="i-mdi-linkedin w-6 h-6" />
          </div>
          <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
            <span class="i-mdi-youtube w-6 h-6" />
          </div>
        </div>
      </div>
    </div>

    <div class="container py-10">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-16 text-white">
        <div class="col-span-1 lg:col-span-2">
          <label class="text-[15px] 2xl:text-xl">Email</label>
          <p class="text-xl 2xl:text-2xl md:text-extra font-bold pt-3 pb-6">
            hello@devdock.com
          </p>
          <label class="text-[15px] 2xl:text-xl">Whatsapp</label>
          <p class="text-xl 2xl:text-2xl md:text-extra font-bold pt-3">
            +92 (331) 4709729
          </p>
        </div>
        <div class="col-span-1">
          <h5 class="text-xl 2xl:text-2xl md:text-extra font-bold pb-6">Company</h5>
          <div class="flex flex-col gap-3 md:gap-4 text-sm 2xl:text-xl">
            <span
                v-for="link in companyLinks"
                :key="link"
                class="cursor-pointer opacity-8 hover:opacity-10 transition"
            >
              {{ link }} <span v-if="link === 'Hire Us'" class="i-ph-arrow-up-right-light w-5 h-5 translate-y-1" />
            </span>
          </div>
        </div>
        <div class="col-span-1">
          <h5 class="text-xl 2xl:text-2xl md:text-extra font-bold pb-6">Services</h5>
          <div class="flex flex-col gap-3 md:gap-4 text-sm 2xl:text-xl">
            <span
                v-for="link in servicesLinks"
                :key="link"
                class="cursor-pointer opacity-8 hover:opacity-10 transition"
            >{{ link }}</span>
          </div>
        </div>
        <div class="col-span-1">
          <h5 class="text-xl 2xl:text-2xl md:text-extra font-bold pb-6">Resources</h5>
          <div class="flex flex-col gap-3 md:gap-4 text-sm 2xl:text-xl">
            <span
                v-for="link in resourcesLinks"
                :key="link"
                class="cursor-pointer opacity-8 hover:opacity-10 transition"
            >{{ link }}</span>
          </div>
        </div>
      </div>

    </div>

    <hr class="border-t border-[#7EABA0]">

    <div class="copy-right py-5 md:py-[26px]">
      <div class="container text-center text-white">
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm 2xl:text-base">
          <img src="/public/svg/logo-white.svg" alt="DevDock in White">
          <div>
            <span class="cursor-pointer border-r-2 border-[#1F5346] pr-3 mr-3">Privacy Policy</span>
            <span class="cursor-pointer">Terms of Use</span>
          </div>
          <span>© Copyright {{ currentDate.getFullYear() }} ConvrtX. All Rights Reserved.</span></div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
const companyLinks = ['About', 'Hire Us', 'Contact Us']
const servicesLinks = ['Web Development', 'UI/UX', 'MVP Design', 'All Services']
const resourcesLinks = ['Blog', 'Media Kit', 'All Time Reviews', 'Leave a review on Trust Pilot']

const currentDate = new Date()
</script>

<style scoped lang="scss">
.footer-banner{
  /*background: url("/public/img/boxes_bg.png"), lightgray 0% 0% / 100px 100px repeat;*/
  /*background-image: url("/public/img/boxes_bg.png");*/
  /*background-repeat: no-repeat;*/
  /*background-position: 100% 100%;*/
}
.CTO{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFDEF7;
  background-image: url("/img/boxes_bg.png");
  background-position: 50%;
  background-repeat: repeat;
  background-size: auto 100%;
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    opacity: 1;
    background: linear-gradient(270deg, rgba(255, 222, 247, 1) 0.08%, rgba(255, 222, 247, 0.5) 10.2%, rgba(255, 222, 247, 0.9) 17.2%, rgba(255, 222, 247, 0.9) 70.33%, rgba(255, 222, 247, 0.5) 78.5%, rgba(255, 222, 247, 1) 92.88%);
  }
}
</style>
