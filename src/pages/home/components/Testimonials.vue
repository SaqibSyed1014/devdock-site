<template>
  <section class="bg-sky pb-10 lg:py-16">
    <div class="container lg:mb-20">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-5 text-primary">
        <p class="text-center lg:text-left sm:text-lg 2xl:text-xl">
          {{ testimonailSection.description }}
        </p>
        <div>
          <p class="sm:text-base 2xl:text-xl pb-6">
            {{ testimonailSection.text }}
          </p>
          <hr>
          <div class="flex flex-nowrap whitespace-normal overflow-hidden py-6">
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index"  class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index" class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-banner px-3 md:px-5">
      <div class="video-container relative cursor-pointer rounded-lg rounded-xl lg:rounded-[40px] overflow-hidden">
        <div class="flex flex-col justify-center">
          <img class="block lg:hidden" src="/public/img/rocket.png" alt="Rocket">
          <Parallaxy class="hidden lg:block" :speed="80" direction="opposite">
            <img class="parallax-effect" src="/public/img/rocket.png" alt="Rocket">
          </Parallaxy>
        </div>
        <div class="content-wrapper absolute left-3 md:left-10 top-0 flex flex-col justify-between h-full py-4 md:py-10">
          <button
              class="rounded-full bg-secondary text-primary py-1 sm:py-2 lg:py-2.5 px-6 sm:px-7 md:px-9 lg:px-11 text-xs sm:text-sm md:text-base w-fit font-medium"
              :class="[playVideo ? 'fade-out' : 'fade-in']"
          >
            Get the full effect
          </button>
          <h3
              class="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:text-[80px] lg:leading-[80px] cursor-pointer"
              :class="[playVideo? 'fade-out' : 'fade-in']"
          >
            Feel the <br>BuzzZZz.
          </h3>
          <button
              class="play-btn flex justify-center items-center rounded-full w-8 h-8 md:w-14 md:h-14 lg:h-[77px] lg:w-[77px] relative cursor-pointer"
              :class="[playVideo ? 'fade-out' : 'fade-in']"
              @click="playVideo = true"
          >
            <div class="btn-bg" />
            <span class="btn-control-icon i-mdi-play md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  </section>

  <VideoPlayer
      v-model:display="playVideo"
      vid-source="https://www.surfe.com/wp-content/uploads/2023/06/Product-tour.mp4"
  />
</template>

<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy';
import VideoPlayer from '@/core/components/VideoPlayer.vue'
import { testimonailSection, clientLogos } from "@/core/constants/home-view";

const playVideo = ref(false)

watch(playVideo, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
.horizontal-slider{
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-name: HSlider;
  animation-play-state: running;
  animation-timing-function: linear;
  flex: 0 0 auto;
  flex-wrap: nowrap;
}

hr{
  border-top: 1px solid #BDEDFC;
}
.video-banner{
  img.parallax-effect{
    transform: scale(1.14);
    transition: transform .95s cubic-bezier(.25,.46,.45,.94);
  }
  .video-container:hover img.parallax-effect{
    transform: scale(1.2);
  }
  button{
    transition: transform .7s cubic-bezier(.25,.46,.45,.94);
    &.fade-in{
      transform: translateY(0);
    }
    &.fade-out{
      transform: translateY(-100px);
    }
    &.play-btn{
      &.fade-in{
        transform: translateY(0);
      }
      &.fade-out{
        transform: translateY(100px);
      }
    }
  }
  h3{
    transition: opacity .7s linear;
    &.fade-in{
      opacity: 1;
    }
    &.fade-out{
      opacity: 0;
    }
  }
}

.play-btn{
  & .btn-bg {
    &::before {
      background-color: #ffa2ea;
    }
    &::after{
      background-color: #fff;
    }
  }
}

</style>
