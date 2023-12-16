<script setup>
import AppButton from "@/core/components/AppButton.vue";
import '@typeform/embed/build/css/popup.css'

defineProps({
  secondary: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false
  }
})

// import { useGlobalStore } from "@/stores/global";
// import { createPopup } from '@typeform/embed'
// <link rel="stylesheet" href="//embed.typeform.com/next/css/popup.css" />
// onMounted(() => { For TypeForm Integration
//   const { open } = createPopup('01HHQR1BGEF297XJFA2NFV4Z3A')
//   document.querySelector('.TFButton').onclick = open
// })
</script>

<template>
  <a href="https://dcs8j89snwr.typeform.com/to/aHsfWYHd?utm_source=xxxxx&utm_term=xxxxx&utm_content=xxxxx" target="_blank">
    <AppButton
        :secondary="secondary"
        :block="block"
    >
      Let's Connect
    </AppButton>
  </a>
</template>
