<template>
  <header class="bg-sky pb-16 md:pb-20 pt-[155px]">
    <div class="intro-content container text-primary text-center">
      <h1 class="text-4xl md:text-6xl lg:text-8xl flex flex-row flex-wrap gap-y-2 lg:gap-y-3 items-center justify-center font-semibold">
        <span>Get</span>&nbsp;<span>your</span>&nbsp;<span>Personalized</span>
        <img src="/public/img/hire_01.png" alt="Hire 01" width="165" height="190" class="rounded-[100px] shrink-0 hidden lg:block mx-3">
        <img src="/public/img/hire_02.png" alt="Hire 02" width="165" height="190" class="rounded-[100px] shrink-0 hidden lg:block">
        &nbsp;<span>Development</span>&nbsp;<span>Services</span>&nbsp; <span>Under</span>&nbsp;<span>1 Roof</span>&nbsp;
        <img src="/public/img/hand.png" alt="Hand" class="w-[20%] md:w-2/12 rounded-[100px] shrink-0">
      </h1>
      <div class="pt-10">
        <p class="text-lg lg:text-2xl">
          Focus only on <span class="underlined-word">productivity</span> now
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-14">
          <AppButton class="fancy-btn">View Portfolio</AppButton>
          <AppDropdown show-on-hover :options="['Account', 'Settings']">
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
</script>

<style scoped lang="scss">
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
