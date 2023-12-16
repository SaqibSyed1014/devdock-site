<template>
  <component
    :is="isLink ? externalLink ? 'a' : 'router-link' : 'button'"
    :href="externalLink ? to : null"
    :target="externalLink ? '_blank' : null"
    :to="isLink ? to : null"
    :type="isLink ? null : 'button'"
    :class="[secondary ? 'secondary-btn' : 'primary-btn', { 'w-full': block }]"
    class="site-button inline-block rounded py-2.5 xss:py-3 sm:py-3.5 px-3 xss:px-4 md:px-[22px] lg:px-7 2xl:px-8 text-xs xss:text-sm 2xl:text-lg font-medium leading-normal"
  >
    <span class="btn-bg" />
    <span class="btn-label flex justify-center items-center">
      <slot/>
    </span>
  </component>
</template>

<script setup>
defineProps({
  secondary: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Object,
    default: {},
  },
  externalLink: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.site-button{
  position: relative;
  cursor: pointer;
  .btn-label{
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
