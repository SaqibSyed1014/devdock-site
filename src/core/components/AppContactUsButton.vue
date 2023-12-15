<script setup>
import AppButton from "@/core/components/AppButton.vue";
import { useGlobalStore } from "@/stores/global";

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

const store = useGlobalStore()
</script>

<template>
  <AppButton
      :secondary="secondary"
      :block="block"
      @click="store.toggleContactForm(true)"
  >
    Let's Connect
  </AppButton>
</template>
