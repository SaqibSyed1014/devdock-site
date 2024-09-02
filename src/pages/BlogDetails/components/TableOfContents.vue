<script setup lang="ts">
import {BlogTableContentLink} from "@/core/types/blogs.type.ts";

defineProps<{
  tableContents: BlogTableContentLink[]
}>();

function scrollToContent(id :string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({
    behavior: "smooth"
  })
}
</script>

<template>
  <div class="blog-content-index bg-sky rounded-[10px] p-5 md:p-[29px] mb-6">
  <div class="flex max-md:flex-col gap-2 justify-between mb-5">
    <h4 class="text-2xl">Table of Content</h4>
<!--    <button type="button" class="flex gap-1.5 items-center text-xs sm:text-sm font-bold py-2.5 px-3 bg-white rounded-[82px]">-->
<!--      <img src="/svg/ai-document.svg" alt="AI Document SVG">-->
<!--      Read AI-Generated Summary-->
<!--      <img src="/svg/chevron-down.svg" alt="Dropdown Arrow SVG">-->
<!--    </button>-->
  </div>
    <template v-for="link in tableContents">
      <p class="indexed-link" @click="scrollToContent(link.id)">
        {{ link.text }}
      </p>
      <template v-if="link.subLinks.length">
        <template v-for="(subLink, i) in link.subLinks" :key="i">
          <ol class="ml-8">
            <li class="indexed-link" @click="scrollToContent(subLink.id)">
              {{ `${i + 1}. ${subLink.text}` }}
            </li>
          </ol>
        </template>
      </template>
    </template>
  </div>
</template>
