<template>
  <button
      type="button"
      :class="[secondary ? 'secondary-btn' : 'primary-btn']"
      class="inline-block rounded py-3 sm:py-3.5 px-4 md:px-[22px] text-sm font-medium leading-normal"
  >
    <span class="btn-bg" />
    <span class="btn-label">
      <slot/>
    </span>
  </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  secondary: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
button{
  position: relative;

  .btn-label{
    display: inline-block;
    isolation: isolate;
    transition: transform .5s cubic-bezier(.19,1,.22,1);
  }
  .btn-bg::before, .btn-bg::after{
    border-radius: 4px;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .btn-bg::before{
    background-color: #ffa2ea;
    opacity: 0;
    transition: opacity 0ms linear;
  }
  .btn-bg::after{
    transition: transform .5s cubic-bezier(.19,1,.22,1);
  }
  &.primary-btn {
    .btn-bg::after { background: #073742; }
    .btn-label{ color: white; }
  }
  &.secondary-btn {
    .btn-label{ color: #073742; }
    .btn-bg::after { background: #D1F2FD; }
  }
  &:hover {
    .btn-bg::before {
      opacity: 1;
    }

    .btn-bg::after, .btn-label {
      transform: translate3d(-2px, -2px, 0);
      transition: transform .5s cubic-bezier(.19,1,.22,1);
    }
  }
}
</style>
