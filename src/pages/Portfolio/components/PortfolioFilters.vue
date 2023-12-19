<script setup>
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";
import {ref} from "vue";

const props = defineProps({
  headerData: {
    type: Object,
    required: true
  },
  portfolioFilters: {
    type: Array,
    required: true
  }
})

let filteredContent = ref(props.portfolioFilters?.flatMap(item => item.content))
let selectedContentIndex = ref(-1)

const selectAllFilters = () => {
  selectedContentIndex.value = -1
  filteredContent.value = props.portfolioFilters?.flatMap(item => item.content)
}

const filterContent = (item, index) => {
  selectedContentIndex.value = index
  filteredContent.value = item.content
}
</script>

<template>
  <div class="container">
    <hr class="border border-light-gray">
    <div class="container px-2 md:px-3 pt-8 pb-5 lg:py-5">
      <div class="flex flex-wrap items-center gap-3 sm:gap-5">
        <button
            class="filter-badge relative flex justify-center rounded-5xl font-medium cursor-pointer px-4 py-2 sm:py-3 sm:px-5"
            :class="{'active': selectedContentIndex === -1}"
            @click="selectAllFilters"
        >
          <span class="btn-bg" />
          <span class="btn-content text-sm sm:text-base 2xl:text-xl">All</span>
        </button>
        <template v-for="(filter, index) in portfolioFilters" :key="index">
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
    <label class="text-lg text-dark-gray block md:pl-1 pt-3">
      Portfolio
    </label>
    <h2 class="header-heading pt-8 md:pt-14">
      {{ headerData.startText }}<br>
      <span class="underlined-word">{{ headerData.underlined }}</span>
      {{ headerData.endText }}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-14 pt-14 md:pt-20">
      <template
          v-for="(content, i) in filteredContent"
          :key="i">
        <AppPortfolioCard
            :content="content"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-image{
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.underlined-word{
  &::after{
    bottom: -3px;
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