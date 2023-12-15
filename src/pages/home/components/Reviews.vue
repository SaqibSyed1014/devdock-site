<script setup>
import UserCard from "@/core/components/UserCard.vue";
import AppButton from "@/core/components/AppButton.vue";
import pageData from "@/core/constants/reviews.json"
import AppContactUsButton from "@/core/components/AppContactUsButton.vue";

const reviewsData = pageData.clientReviews
</script>

<template>
  <section class="container py-20 text-primary">
    <h2 class="text-3xl sm:text-5xl font-medium mx-auto text-center pb-14 w-full lg:w-2/4">
      {{ reviewsData.heading }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pb-16">
      <template
          v-for="(review, index) in reviewsData.reviews"
          :key="index"
      >
        <UserCard
            :details="review"
        />
      </template>
    </div>
    <div class="text-center">
      <AppContactUsButton />
    </div>
  </section>
</template>
