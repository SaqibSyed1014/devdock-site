<script setup>
import AppButton from "@/core/components/AppButton.vue";
</script>

<template>
  <section class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 pt-20">
      <div class="flex flex-col text-center justify-center text-primary sm:px-10">
        <h4 class="text-3xl md:text-4xl 2xl:text-5xl font-bold w-3/4 md:w-2/4 mx-auto">
          Ready to Elevate Your Project? Let's Talk!
        </h4>
        <div class="py-8">
          <img class="mx-auto" src="/public/svg/curve.svg" alt="Curve Underline">
        </div>
        <p class="text-base md:text-xl 2xl:text-2xl">Our experienced team is ready to listen to your needs, provide
          valuable insights, and tailor a customized solution that perfectly fits your goals.</p>
        <div>
          <AppButton class="mt-10">Direct Contact</AppButton>
        </div>
      </div>
      <div>
        <img src="/img/meeting.webp" alt="Client Meeting">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>