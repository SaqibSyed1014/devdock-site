<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const showBtn = ref(false);
const handleScroll = () => showBtn.value = window.scrollY > 2500;

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <button
      v-if="showBtn"
      class="scroll-to-top-btn fixed bottom-5 right-5 2xl:bottom-10 2xl:right-10 flex justify-center items-center rounded-full w-12 h-12 md:w-10 md:h-10 2xl:w-16 2xl:h-16 cursor-pointer"
      @click="scrollToTop"
  >
    <div class="btn-bg" />
    <div class="btn-control-icon z-20">
      <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10.0726L11 1L1 10.0726" fill="#FDFDFD"></path>
        <path d="M21 10.0726L11 1L1 10.0726"
              stroke-linejoin="round"></path>
      </svg>
    </div>
  </button>
</template>

<style scoped lang="scss">
.scroll-to-top-btn{
  & .btn-bg {
    &::before {
      background-color: theme('colors.pink');
    }
    &::after{
      background-color: theme('colors.orange');
    }
  }
}
</style>