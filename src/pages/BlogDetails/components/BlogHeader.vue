<script setup lang="ts">
defineProps<{
  title: string,
  subTitle: string,
  blogImage: string
}>()
</script>

<template>
  <header class="pb-20 pt-32 md:pt-[155px]">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-16 md:gap-0 text-primary">
        <div class="col-span-1">
          <h1 class="text-3xl md:text-[50px] lg:text-[58px] md:leading-[58px] font-medium">
            {{ title }}
          </h1>
          <p class="py-5 pb-7">
            {{ subTitle }}
          </p>
          <div class="flex items-center gap-3 md:pt-10">
            <div class="flex items-center justify-center border border-primary rounded-full h-14 w-14 overflow-hidden shrink-0">
              <img src="/img/logo-clipped.png" alt="Blog Image">
            </div>
            <div>
              <p class="font-bold leading-tight">DevDock Team</p>
              <small class="text-sm">
                13 June 2024
                <span class="">&nbsp;.&nbsp;</span>
                5 min Read
              </small>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex justify-end overflow-hidden rounded-lg md:rounded-[20px] lg:mx-5 2xl:ml-10">
            <img
                :src="blogImage"
                alt="Blog Image"
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
