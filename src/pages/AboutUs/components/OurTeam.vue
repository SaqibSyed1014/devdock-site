<script setup lang="ts">
import AppAvatar from "@/core/components/AppAvatar.vue";
import pageData from "@/core/constants/about-us.json";
import contactPageData from "@/core/constants/contact-us.json"

const teamSectionData = pageData.teamSectionContent
const teamData = contactPageData.team
</script>

<template>
  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10">
      <div class="lg:col-span-1 font-semibold">
        <h3 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          {{ teamSectionData.heading }}
        </h3>
      </div>
      <div class="lg:col-span-2">
        <div class="team-members flex flex-wrap justify-around md:justify-start items-center gap-5 xss:gap-14 md:gap-10 pt-6">
          <template v-for="member in teamData">
            <AppAvatar
                :user-name="member.name"
                :role="member.designation"
                :user-image="member.image"
                :bg-color="member.bgColor"
                :hover-disabled="true"
                size="lg"
            />
          </template>
        </div>
      </div>
  </div>
  </div>

</template>
