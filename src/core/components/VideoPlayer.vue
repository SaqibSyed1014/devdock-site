<template>
  <transition name="fade">
    <div
        v-if="display"
        class="video-player transition fixed z-50 md:p-36 lg:p-64 top-0 left-0 w-full h-screen overflow-hidden flex justify-center items-center"
    >
      <div
          class="bg-primary w-full h-full absolute top-0 left-0"
          @click="$emit('update:display', false)"
      />

      <div class="video-container relative">
        <video
            class="block h-full w-full"
            controls
            autoplay
            playsinline
            disableremoteplayback
            :src="vidSource"
        />
        <button
            class="close-btn fixed md:absolute top-5 right-5 md:-top-5 md:-right-5 flex justify-center items-center rounded-full w-12 h-12 md:w-10 md:h-10 2xl:w-14 2xl:h-14 cursor-pointer"
            @click="$emit('update:display', false)"
        >
          <div class="btn-bg"/>
          <span class="btn-control-icon text-white i-ph-x w-8 h-8 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  vidSource: string;
  display: boolean
}>();
defineEmits(['update:display'])
</script>

<style scoped lang="scss">
.close-btn{
  & .btn-bg {
    &::before {
      background-color: #fff;
    }
    &::after{
      background-color: #ff9254;
    }
  }
}
</style>
