<template>
  <section class="container py-20">
    <h3 class="text-3xl sm:text-5xl font-medium mx-auto text-center pb-14 w-full lg:w-2/4">
      See what our founders are saying!
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pb-16">
      <template v-for="(info, index) in userReviews" :key="index">
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

const userReviews = [
  { color: 'calamansi', name: 'hen (Stone) Shi', avatar: 'shaoke_ceo.png', desc: 'Shaoke Logistics - CEO', logo: 'shaoke.svg',
    review: 'I am shocked that dev dock process is super simple, and he provides proper results even though my internee manager has no problem understanding it.' },
  { color: 'lace', name: 'Hammad Afridi', avatar: 'commkit_ceo.png', desc: 'Manager at Commkit', logo: 'commkit.svg',
    review: 'Very professional. Respond well on the needs of the client. Efficient and reliable in delivering output.' },
  { color: 'water', name: 'Micheal McNair', avatar: 'spotswap_ceo.png', desc: 'Founder of SpotSwap', logo: 'spotswap.svg',
    review: 'Excellent work on the website coding, fully responsive and was very co operative in terms of making further changes after the first revision. Will be working soon again.' },
]
</script>

<style scoped>

</style>
