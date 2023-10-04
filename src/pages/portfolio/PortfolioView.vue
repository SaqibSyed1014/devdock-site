<template>
  <div class="text-primary py-20 md:py-28">
    <div class="px-1">
      <hr class="border border-light-gray">
      <div class="container px-3 py-5">
        <div class="flex flex-wrap items-center gap-3 sm:gap-5">
          <template v-for="(filter, index) in pageFilters" :key="index">
            <button
                class="filter-badge relative flex justify-center rounded-5xl font-medium cursor-pointer px-4 py-2 sm:py-3 sm:px-5"
                :class="{'active': selectedContentIndex === index}"
                @click="filterContent(filter, index)"
            >
              <span class="btn-bg" />
              <span class="btn-content flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <img :src="`/svg/${filter.svg}`" alt="Badge SVG">
                {{ filter.label }}
              </span>
            </button>
          </template>
        </div>
      </div>
      <hr class="border border-light-gray">
    </div>
    <div class="container pt-8 md:pt-14">
      <h2 class="text-center text-3xl sm:text-4xl md:text-6.2xl !leading-tight font-semibold">
        {{ mainHeading.startText }}
        <span class="underlined-word">{{ mainHeading.underlined }}</span>
        {{ mainHeading.endText }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10  pt-14">
          <div
              v-for="(content, i) in filteredContent"
              :key="i" class="group cursor-pointer"
          >
            <img src="/public/svg/client_logo.svg" alt="Client Logo">
            <div
                class="project-image border border-dark-gray rounded group-hover:border-dark-gray/0 transition-all my-5"
            >
              <div class="overflow-hidden">
                <img src="/public/img/mockup.png" alt="Project Mockup Image">
              </div>
            </div>
            <p class="text-xl font-medium pb-1.5">
              {{ content.desc }}
            </p>
            <span class="text-base text-base-gray hover:text-pink transition cursor-pointer">
              View Case Study
            </span>
          </div>
        </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 pt-20 md:pt-14">
        <div class="flex flex-col text-center justify-center sm:px-10">
          <h4 class="text-4xl font-bold w-3/4 md:w-2/4 mx-auto">
            {{ CTOSection.heading }}
          </h4>
          <div class="py-8">
            <img class="mx-auto" src="/public/svg/curve.svg" alt="Curve Underline">
          </div>
          <p class="text-xl">{{ CTOSection.text }}</p>
          <div>
            <AppButton class="mt-10">Direct Contact</AppButton>
          </div>
        </div>
        <div>
          <img src="/public/img/meeting.png" alt="Client Meeting">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/core/components/AppButton.vue";
import { mainHeading, CTOSection, pageFilters } from "@/core/constants/portfolio-view";

let filteredContent = ref(pageFilters?.flatMap(item => item.content))
let selectedContentIndex = ref(-1)

const filterContent = (item, index) => {
  selectedContentIndex.value = index
  filteredContent.value = item.content
}
</script>

<style lang="scss" scoped>
.underlined-word{
  &::after{
    left: 0;
    bottom: -3px;
    width: 100%;
  }
}
.project-image{
  position: relative;
  z-index: 11;
  transition: transform .5s cubic-bezier(.19,1,.22,1);
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: #ffa2ea;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
    border-radius: 4px;
    transform: translate3d(2px, 2px, 0);
    transition: opacity .5s cubic-bezier(.19,1,.22,1);
  }
  &:hover {
    transform: translate3d(-2px, -2px, 0);
    &::after {
      opacity: 1;
    }
  }
}


.filter-badge{
  & .btn-bg{
    &::after, &::before{
      border-radius: 40px;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    &::before{
      background-color: #ffa2ea;
      opacity: 0;
      transition: opacity 0ms linear .5s;
    }
    &::after{
      background-color: #E0E5E6;
    }
  }
  &.active {
    & .btn-bg {
      &::after{
        background-color: #AFBDC0;
      }
    }
  }
  & .btn-content,.btn-bg::after{
    transition: transform .5s cubic-bezier(.19,1,.22,1);
  }
  & .btn-content{
    isolation: isolate;
  }
  &:hover{
    & .btn-bg {
      &::before {
        opacity: 1;
        transition: opacity 0ms linear;
      }

      &::after, {
        transform: translate3d(-2px, -2px, 0);
      }
    }
    & .btn-content{
      transform: translate3d(-2px, -2px, 0);
    }
  }
}
</style>
