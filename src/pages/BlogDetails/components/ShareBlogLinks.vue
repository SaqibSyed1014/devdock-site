<script setup lang="ts">
import { ref, watch } from 'vue'
import ToastNotification from "@/core/components/ToastNotification.vue";
const shareLinks = [
  {
    icon: "i-mdi-facebook",
    link: "https://www.facebook.com/devdock.team"
  },
  {
    icon: "i-mdi-twitter",
    link: ""
  },
  {
    icon: "i-mdi-instagram",
    link: " https://www.instagram.com/devdock.tech/"
  },
  {
    icon: "i-mdi-linkedin",
    link: "https://www.linkedin.com/company/devdock"
  }
]

const showCopyToast = ref<boolean>(false);
const showErrorCopyToast = ref<boolean>(false);
function copyLink() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
      .then(() => showCopyToast.value = true)
      .catch(() => showErrorCopyToast.value = true);
}
</script>

<template>
  <div class="share-links max-md:fixed max-md:right-0 max-md:top-1/3 flex items-center flex-col gap-3 max-md:pr-3">
    <p class="pb-2 font-semibold text-lg max-md:hidden">Share: {{showCopyToast}}</p>

    <template v-for="social in shareLinks">
      <a
          :href="social.link"
          target="_blank"
          class="flex justify-center items-center w-10 h-10 bg-white border border-primary/50 rounded cursor-pointer group hover:bg-primary transition"
      >
        <span
            class="text-xl xl:text-2xl text-primary group-hover:text-white transition"
            :class="[`${social.icon}`]"
        />
      </a>
    </template>

    <div @click="copyLink" class="flex justify-center items-center w-10 h-10 bg-white border border-primary/50 rounded cursor-pointer group hover:bg-primary transition">
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
