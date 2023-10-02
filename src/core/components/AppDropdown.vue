<template>
  <Menu
      v-slot="{ open }"
      as="div"
      class="relative inline-block text-left"
      @mouseenter="showOnHover ? menuOpen = true : null"
      @mouseleave="showOnHover ? menuOpen = false : null"
      @click.stop="showOnHover ? null : menuOpen = !menuOpen"
  >
    <div class="py-2.5 pl-3 pr-5" :class="[applyStyles]">
      <MenuButton
          class="group flex items-center whitespace-nowrap text-base-white transition-colors duration-200 font-medium"
          :class="{ 'hover:text-pink': showHoverColor }"
      >
        <slot />
        <span
            class="ml-2 w-2 text-[#889BA0]"
            :class="{ 'group-hover:text-pink': showHoverColor }"
        >
          <svg
              :class="[menuOpen ? 'rotate-180' : 'rotate-0']"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 transition duration-200">
            <path
                stroke="currentColor"
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"/>
          </svg>
        </span>
      </MenuButton>
      <MenuItems
          v-show="menuOpen ?? open"
          :static="true"
          class="absolute flex flex-col gap-1 z-[100] bg-white w-full overflow-hidden left-0 px-3 pb-3 pt-2 origin-top-right rounded-b border-[1px] border-t-0 focus:outline-none"
      >
        <MenuItem v-for="(option, index) in options" :key="index">
          <div
              class="menu-option text-gray-400 hover:text-primary transition text-sm hover:bg-transparent cursor-pointer"
              :style="{ '--index': index }"
          >
            {{ option }}
          </div>
        </MenuItem>
      </MenuItems>
    </div>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {defineProps} from "vue";
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  showOnHover: {
    type: Boolean,
    required: false
  },
  showHoverColor: {
    type: Boolean,
    required: false
  }
})

const menuOpen = ref(false);

const applyStyles = computed(() => {
  let styles= 'bg-white outline outline-1 outline-slate-200 rounded-t'
  if (props.showOnHover && menuOpen.value) return styles
  if (menuOpen.value) return styles
  else return ''
})
</script>

<style scoped>
.menu-option {
  opacity: 0;
  animation: linkListNavItem .4s calc(var(--index)*50ms) cubic-bezier(.19,1,.22,1) forwards;
  transition-delay: calc(var(--index)*50ms);
}
</style>
