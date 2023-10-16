<template>
  <div class="bg-sky mb-16 xss:mb-32 sm:mb-44 lg:mb-56 xl:mb-80 2xl:mb-96">
    <div class="relative container py-20 sm:py-32 md:py-40 lg:py-56 2xl:py-80 relative">
      <div class="">
        <div class="w-full mx-auto absolute top-1/3 md:top-1/4 left-1/2 -translate-x-2/4 px-4 md:px-0">
          <div class="">
            <Swiper
                :slides-per-view="1"
                :space-between="50"
                :allow-touch-move="false"
                :modules="modules"
                :navigation="swiperOptions.navigation"
            >
              <SwiperSlide>
                <AppImageComparison
                    before-image="/img/template-BW.webp"
                    after-image="/img/template.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <div class="">
                  <img src="/img/template.webp" alt="Case Study Image">
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="">
                  <img src="/img/template.webp" alt="Case Study Image">
                </div>
              </SwiperSlide>
            </Swiper>

            <div class="absolute bottom-2 right-6 md:bottom-5 md:right-5 flex gap-1 sm:gap-3 z-20">
              <button
                  class="custom-arrow-prev bg-sky text-primary hover:bg-primary hover:text-sky transition w-10 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 flex justify-center items-center"
              >
                <span class="i-bi-arrow-left w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"></span>
              </button>
              <button
                  class="custom-arrow-next bg-sky text-primary hover:bg-primary hover:text-sky transition w-10 h-6 sm:w-12 sm:h-8 md:w-16 md:h-10 flex justify-center items-center"
              >
                <span class="i-bi-arrow-right w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import AppImageComparison from "@/core/components/AppImageComparison.vue";
import 'swiper/css/bundle'

const modules = [Navigation]
const swiperOptions = {
  navigation: {
    nextEl: '.custom-arrow-next',
    prevEl: '.custom-arrow-prev',
  },
}
</script>

<style scoped>
.custom-arrow-next,
.custom-arrow-prev{
  cursor: pointer;
}
.swiper-button-disabled{
  cursor: not-allowed;
  color: inherit;
  background-color: #eae9e9;
}
</style>
