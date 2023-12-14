<template>
  <div class="video-banner px-3 md:px-5">
    <div class="video-container relative rounded-lg lg:rounded-[40px] overflow-hidden">
      <div class="flex flex-col justify-center">
        <img
            class="block lg:hidden"
            src="/img/rocket.webp"
            alt="Rocket"
            loading="lazy"
        >
        <Parallaxy class="hidden lg:block" :speed="90" direction="opposite">
          <img
              class="parallax-effect"
              src="/img/rocket.webp"
              alt="Rocket"
              loading="lazy"
          >
        </Parallaxy>
      </div>
      <div class="content-wrapper absolute left-3 md:left-10 top-0 flex flex-col justify-between h-full py-4 md:py-10">
        <div>
          <button
              v-if="showBtn"
              class="rounded-full bg-secondary text-primary py-1 sm:py-2 lg:py-2.5 px-6 sm:px-7 md:px-9 lg:px-11 text-xs sm:text-sm md:text-base w-fit font-medium"
              :class="[playVideo ? 'fade-out' : 'fade-in']"
          >
            {{ btnText }}
          </button>
        </div>
        <div>
          <h3
            v-if="showPreviewHeading"
            class="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:text-[80px] lg:leading-[80px] cursor-pointer"
            :class="[playVideo? 'fade-out' : 'fade-in']"
          >
            Feel the <br>buzzZZz.
          </h3>
        </div>
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

  <VideoPlayer
      v-model:display="playVideo"
      vid-source="https://www.surfe.com/wp-content/uploads/2023/06/Product-tour.mp4"
  />
</template>

<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy'; // doesn't support TS
import VideoPlayer from '@/core/components/VideoPlayer.vue'

defineProps({
  showBtn: {
    type: Boolean,
    required: true
  },
  btnText: {
    type: String,
    default: 'Get the boost effect'
  },
  showPreviewHeading: {
    type: Boolean,
    required: true
  },
  previewHeadingText: {
    type: String,
    default: ''
  }
})

const playVideo = ref(false)

watch(playVideo, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<style lang="scss" scoped>
.video-banner{
  img.parallax-effect{
    width: 100%;
    height: 100%;
    transform: scale(1.24);
    transition: transform .95s cubic-bezier(.25,.46,.45,.94);
  }
  .video-container:hover img.parallax-effect{
    transform: scale(1.35);
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
