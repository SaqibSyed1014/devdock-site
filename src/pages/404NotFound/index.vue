<script setup>

</script>

<template>
  <section class="page-not-found pb-14 md:pb-20 pt-28 md:pt-[155px]">
    <div class="container">
      <div class="flex justify-center items-center 2xl:px-40">
        <h1
            class="hero-message w-full text-primary flex flex-col text-3xl xss:text-4xl md:text-6xl lg:text-7xl xl:text-8xl xl:!leading-[105px] 2xl:px-40"
        >
        <span class="flex justify-center items-end lg:slide-in-text" :style="{ '--delay': 1.5 }">
          <span>Sorry Looks Like</span>
            <img
              src="/img/not-found.gif"
              alt="Not Found GIF"
              class="rounded-curved shrink-0 h-20 md:h-24 ml-2 sm:ml-4 w-1/4 xss:w-2/12 sm:w-[12%] lg:w-auto"
            >
        </span>
          <span class="flex justify-center items-center lg:slide-in-text" :style="{ '--delay': 2 }">
            we couldn't find what
          </span>
          <span class="flex justify-center items-center lg:slide-in-text" :style="{ '--delay': 2.3 }">
          you're looking for
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
</style>