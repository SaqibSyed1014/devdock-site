<template>
  <div class="text-primary py-16 md:py-24 lg:py-28">
    <div class="container px-1">
      <hr class="border border-light-gray">
      <div class="container px-2 md:px-3 py-5">
        <div class="flex flex-wrap items-center gap-3 sm:gap-5">
          <button
              class="filter-badge relative flex justify-center rounded-5xl font-medium cursor-pointer px-4 py-2 sm:py-3 sm:px-5"
              :class="{'active': selectedContentIndex === -1}"
              @click="selectAllFilters"
          >
            <span class="btn-bg" />
            <span class="btn-content text-sm sm:text-base 2xl:text-xl">All</span>
          </button>
          <template v-for="(filter, index) in pageFilters" :key="index">
            <button
                class="filter-badge relative flex justify-center rounded-5xl font-medium cursor-pointer px-4 py-2 sm:py-3 sm:px-5"
                :class="{'active': selectedContentIndex === index}"
                @click="filterContent(filter, index)"
            >
              <span class="btn-bg" />
              <span class="btn-content flex items-center gap-2 sm:gap-3 text-sm sm:text-base 2xl:text-xl">
                <img :src="`/svg/${filter.svg}`" alt="Badge SVG">
                {{ filter.label }}
              </span>
            </button>
          </template>
        </div>
      </div>
      <hr class="border border-light-gray">
    </div>
    <div class="container">
      <p class="text-dark-gray text-sm sm:text-base 2xl:text-xl font-medium md:pl-1 pt-3">Portfolio</p>
      <h2 class="text-center text-3xl sm:text-4xl md:text-6.2xl !leading-tight font-semibold pt-8 md:pt-14">
        {{ mainHeading.startText }}
        <span class="underlined-word">{{ mainHeading.underlined }}</span>
        {{ mainHeading.endText }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 pt-14">
          <template
              v-for="(content, i) in filteredContent"
              :key="i">
            <AppPortfolioCard
                :content="content"
            />
          </template>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 pt-20 md:pt-14">
        <div class="flex flex-col text-center justify-center sm:px-10">
          <h4 class="text-3xl md:text-4xl 2xl:text-5xl font-bold w-3/4 md:w-2/4 mx-auto">
            {{ CTOSection.heading }}
          </h4>
          <div class="py-8">
            <img class="mx-auto" src="/public/svg/curve.svg" alt="Curve Underline">
          </div>
          <p class="text-base md:text-xl 2xl:text-2xl">{{ CTOSection.text }}</p>
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
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";
import { mainHeading, CTOSection, pageFilters } from "@/core/constants/portfolio-view";

let filteredContent = ref(pageFilters?.flatMap(item => item.content))
let selectedContentIndex = ref(-1)

const selectAllFilters = () => {
  selectedContentIndex.value = -1
  filteredContent.value = pageFilters?.flatMap(item => item.content)
}

const filterContent = (item, index) => {
  selectedContentIndex.value = index
  filteredContent.value = item.content
}
</script>

<style lang="scss" scoped>
.project-image{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.underlined-word{
  &::after{
    left: 0;
    bottom: -3px;
    width: 100%;
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
