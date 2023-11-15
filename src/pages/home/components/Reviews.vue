<script lang="ts" setup>
import UserCard from "@/core/components/UserCard.vue";
import AppButton from "@/core/components/AppButton.vue";
import { clientReviews } from "@/core/constants/common";
</script>

<template>
  <section class="container py-20">
    <h3 class="text-3xl sm:text-5xl font-medium mx-auto text-center pb-14 w-full lg:w-2/4">
      {{ clientReviews.heading }}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pb-16">
      <template
          v-for="(review, index) in clientReviews.reviews"
          :key="index"
      >
        <UserCard
            :color="review.color"
            :user-name="review.name"
            :avatar="review.avatar"
            :user-desc="review.desc"
            :logo="review.logo"
            :reviews="review.review"
        />
      </template>
    </div>
    <div class="text-center">
      <AppButton>Direct Contact</AppButton>
    </div>
  </section>
</template>
