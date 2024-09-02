<script setup lang="ts">
import { ref } from 'vue'
import ToastNotification from "@/core/components/ToastNotification.vue";
import { blogSharing } from "@/core/utils/utils.functions.ts";
import { useRoute } from "vue-router";

const route = useRoute();

const shareLinks = [
  {
    icon: "i-mdi-facebook",
    title: "Share on Facebook",
    onClick: () => blogSharing('facebook', route.meta.title as string)
  },
  {
    icon: "i-mdi-twitter",
    title: "Share on Twitter(X)",
    onClick: () => blogSharing('X', route.meta.title as string)
  },
  {
    icon: "i-mdi-linkedin",
    title: "Share on Linkedin",
    onClick: () => blogSharing('linkedin', route.meta.title as string)
  }
]

const showCopyToast = ref<boolean>(false);
const showErrorCopyToast = ref<boolean>(false);
function copyLink() {
  navigator.clipboard.writeText(window.location.href)
      .then(() => showCopyToast.value = true)
      .catch(() => showErrorCopyToast.value = true);
}
</script>

<template>
  <div class="share-links sticky top-24 max-md:fixed max-md:right-0 max-md:top-1/2 max-md:-translate-y-1/2 flex items-center flex-col gap-3 max-md:pr-3 max-md:z-20">
    <p class="pb-2 font-semibold text-lg max-md:hidden">Share:</p>

    <template v-for="social in shareLinks">
      <div
          class="flex justify-center items-center w-10 h-10 bg-white border border-primary/50 rounded cursor-pointer group hover:bg-primary transition"
          :title="social.title"
          @click="social.onClick"
      >
        <span
            class="text-xl xl:text-2xl text-primary group-hover:text-white transition"
            :class="[`${social.icon}`]"
        />
      </div>
    </template>

    <div title="Copy URL" @click="copyLink" class="flex justify-center items-center w-10 h-10 bg-white border border-primary/50 rounded cursor-pointer group hover:bg-primary transition">
      <span class="text-xl xl:text-2xl text-primary i-mdi-link-variant group-hover:text-white transition"></span>
    </div>
  </div>

  <ToastNotification
      type="success"
      :is-shown="showCopyToast"
      content="Link Copied!"
      @hide-toast="showCopyToast = false"
  />

  <ToastNotification
      type="error"
      :is-shown="showErrorCopyToast"
      content="Error Copying the Link"
      @hide-toast="showErrorCopyToast = false"
  />
</template>
