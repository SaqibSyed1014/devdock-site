<template>
  <section class="container py-20">
    <h3 class="text-3xl sm:text-5xl font-medium mx-auto text-center pb-14 w-full lg:w-2/4">
      {{ reviewHeading }}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pb-16">
      <template
          v-for="info in userReviews"
          :key="info.name"
      >
        <UserCard
            :color="info.color"
            :user-name="info.name"
            :avatar="info.avatar"
            :user-desc="info.desc"
            :logo="info.logo"
            :reviews="info.review"
        />
      </template>
    </div>
    <div class="text-center">
      <AppButton>Direct Contact</AppButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UserCard from "@/core/components/UserCard.vue";
import AppButton from "@/core/components/AppButton.vue";
import { reviewHeading, userReviews } from "@/core/constants/home-view.ts";
</script>
