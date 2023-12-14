<script setup>
import AppButton from "@/core/components/AppButton.vue";
import AppDropdown from "@/core/components/AppDropdown.vue";

defineProps({
  heroData: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="bg-sky pb-16 md:pb-20 pt-[155px]">
    <div class="intro-content container text-primary text-center">
      <h1
          class="hero-message hidden lg:flex text-7xl xl:text-8xl !leading-[105px] 2xl:px-40"
      >
        <span class="flex items-center slide-in-text" :style="{ '--delay': 1.5 }">
          <span>{{ heroData.splitHeadline[0] }}</span>
          <img
              :src="heroData.headlineImages[0].path"
              :alt="heroData.headlineImages[0].alt"
              width="165"
              height="190"
              class="rounded-curved ml-4"
          >
        </span>
        <span class="flex items-center slide-in-text" :style="{ '--delay': 2 }">
          <img
              :src="heroData.headlineImages[1].path"
              :alt="heroData.headlineImages[1].alt"
              width="165"
              height="90"
              class="rounded-curved mr-4"
          >
          {{ heroData.splitHeadline[1] }}
        </span>
        <span class="flex items-center slide-in-text" :style="{ '--delay': 2.3 }">
          {{ heroData.splitHeadline[2] }}
          <img
              :src="heroData.headlineImages[2].path"
              :alt="heroData.headlineImages[2].alt"
              width="165"
              height="190"
              class="ml-3"
          >
        </span>
      </h1>
      <h1 class="block lg:hidden text-3xl xss:text-4xl md:text-6xl">
        {{ heroData.fullHeadline }}
        <img
            :src="heroData.headlineImages[2].path"
            :alt="heroData.headlineImages[2].alt"
            class="inline-block align-bottom w-1/4 xss:w-2/12 sm:w-[12%]"
        >
      </h1>
      <div class="pt-10">
        <p class="text-base lg:text-2xl font-bold italic">
          {{ heroData.subText[0] }}
          <span class="underlined-word">
            {{ heroData.subText[1] }}
          </span>
          {{ heroData.subText[2] }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-14">
          <AppButton
              is-link
              :to="{ name: 'DevDockPortfolio' }"
              class="fancy-btn"
          >
            View Portfolio
          </AppButton>
          <AppDropdown
              show-on-hover
              :options="heroData.dropdownOptions"
          >
            Explore our Gallery
          </AppDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

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
    background-image: url("/svg/illustrations.svg");
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
    background-image: url("/svg/star.svg");
    background-repeat: no-repeat;
    height: 15px;
    width: 13px;
  }
}
</style>
