<script setup>

</script>

<template>
  <section class="page-not-found pb-14 md:pb-20 pt-32 md:pt-[155px] overflow-hidden">
    <div class="container">
      <div class="flex justify-center items-center 2xl:px-40 text-center text-primary">
        <h1
            class="hero-message w-full flex flex-col text-3xl xss:text-4xl md:text-6xl xl:text-8xl xl:!leading-[105px]"
        >
          <span class="flex justify-center items-end slide-in-text md:mb-2" :style="{ '--delay': 1.5 }">
            <span>Sorry Looks Like</span>
              <div class="rounded-curved overflow-hidden shrink-0 h-8 xss:h-12 sm:h-16 md:h-20 ml-2 sm:ml-6 xl:ml-6 w-1/4 mb-2">
                <img
                  src="/img/not-found.gif"
                  alt="Not Found GIF"
                  class="w-full h-full object-cover"
                >
              </div>
          </span>
          <span class="slide-in-text" :style="{ '--delay': 2 }">
            we couldn't find what
          </span>
          <span class="flex justify-center items-center slide-in-text" :style="{ '--delay': 2.3 }">
            you're looking for
            <span class="icon-exclamation-mark ml-3"></span>
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.slide-in-text{
  animation: slideIn calc(var(--delay)*.65s) cubic-bezier(.215,.61,.355,1),
  shadowSlideOut calc(var(--delay)*.65s) cubic-bezier(.215,.61,.355,1);
}
h1{
  @media (max-width: 400px) {
    font-size: 1.5rem !important;
  }
}
</style>