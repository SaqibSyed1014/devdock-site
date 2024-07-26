<script setup lang="ts">
import { watch } from "vue";

const props = defineProps<{
  type: 'success' | 'error'
  isShown: boolean,
  content: string
}>()

const emit = defineEmits(['hideToast'])
watch(() => props.isShown, (value) => {
  if (value) {
    setTimeout(() =>  emit('hideToast'), 3000);
  }
})
</script>

<template>
  <Transition name="fade">
    <div v-if="isShown" @click="() => emit('hideToast')" class="toast-notification" :class="[type]">
      <span :class="[type === 'success' ? 'i-mdi-checkbox-marked-circle':'i-mdi-information']" class="text-xl md:text-2xl"></span>
      <p>{{ content }}</p>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.toast-notification{
  position: fixed;
  top: 20px;
  right: 20px;
  height: 70px;
  width: 350px;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  &.success{
    background-color: theme('colors.green');
  }
  &.error{
    background-color: theme('colors.red.500');
  }
}
</style>
