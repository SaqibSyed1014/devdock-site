<template>
  <header class="bg-sky pb-16 md:pb-20 pt-[155px]">
    <div class="intro-content container text-primary text-center">
      <h1
          class="hero-message hidden lg:flex text-7xl 2xl:text-8xl gap-3 font-semibold 2xl:px-40"
      >
        <span class="flex items-center slide-in-text" :style="{ '--delay': 1.5 }">
          <span>Get your Personalized</span>
          <img src="/img/hire_01.webp" alt="Software Development Services" width="165" height="190" class="rounded-curved ml-4">
        </span>
        <span class="flex items-center slide-in-text" :style="{ '--delay': 2 }">
          <img src="/img/hire_02.webp" alt="Personalized" width="165" height="90" class="rounded-curved mr-4">
          Development Services
        </span>
        <span class="flex items-center slide-in-text" :style="{ '--delay': 2.3 }">
          Under 1 Roof
          <img src="/svg/connect_hand.svg" alt="Hand" width="165" height="190" class="ml-3">
        </span>
      </h1>
      <h1 class="block lg:hidden text-4xl md:text-6xl font-semibold">
        Get your Personalized Development Services Under 1 Roof
        <img src="/svg/connect_hand.svg" alt="Hand" class="inline-block align-bottom w-1/4 xss:w-2/12">
      </h1>
      <div class="pt-10">
        <p class="text-lg lg:text-2xl">
          Focus only on <span class="underlined-word">productivity</span> now
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-14">
          <router-link :to="{ name: 'SitePortfolio' }">
            <AppButton class="fancy-btn">View Portfolio</AppButton>
          </router-link>
          <AppDropdown
              show-on-hover
              :options="galleryOptions"
          >
            Explore our Gallery
          </AppDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from "@/core/components/AppButton.vue";
import AppDropdown from "@/core/components/AppDropdown.vue";
import { galleryOptions } from "@/core/constants/home-view.ts"
</script>

<style scoped lang="scss">
.slide-in-text{
  animation: slideIn calc(var(--delay)*.65s) cubic-bezier(.215,.61,.355,1),
  shadowSlideOut calc(var(--delay)*.65s) cubic-bezier(.215,.61,.355,1);
}

.hero-message{
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img{
    display: inline-block;
    flex-shrink: 0;
  }
}
.fancy-btn{
  position: relative;
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 17px;
    left: -70px;
    background-image: url("/public/svg/illustrations.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: -18px;
    right: -12px;
    background-image: url("/public/svg/star.svg");
    background-repeat: no-repeat;
    height: 15px;
    width: 13px;
  }
}
</style>
