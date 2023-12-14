<script setup>
import pageData from "@/core/constants/services.json"

const header = pageData.headerContent
</script>

<template>
  <header class="bg-sky pb-16 md:pb-20 pt-[155px]">
    <div class="container text-primary text-center">
      <h1 class="header-heading 2xl:w-3/4 mx-auto">
        {{ header.heading }}
      </h1>
      <div class="flex justify-center flex-wrap md:flex-nowrap gap-4 md:gap-6 text-sm text-base-gray pt-5">
        <template v-for="(meta) in header.meta">
          <div class="flex items-center gap-2">
            <span :class="[meta.icon]" class="w-5 h-5"/>
            <label>
              {{ meta.label }}
            </label>
          </div>
        </template>
      </div>
    </div>
  </header>
</template>
