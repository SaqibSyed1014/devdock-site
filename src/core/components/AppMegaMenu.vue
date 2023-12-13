<script setup>
import {Menu, MenuButton, MenuItems} from "@headlessui/vue";

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  menuLabel: {
    type: String,
    required: true
  },
  isOpen: Boolean,
  toggleMenu: Function,
})

const firstMenuList = []
const secondMenuList = []

props.options.forEach((option, index) => {
  if (index < props.options.length/2) firstMenuList.push(option)
  else secondMenuList.push(option)
})

const handleToggle = () => {
  props.toggleMenu();
};
</script>

<template>
  <Menu
      as="div"
      class="relative inline-block text-left"
      @mouseenter="handleToggle"
      @mouseleave="handleToggle"
      @click.stop="null"
  >
    <MenuButton
        class="mega-menu-btn group flex items-center whitespace-nowrap py-2.5 pl-3 pr-5 text-base-white hover:text-pink transition-colors duration-200 font-medium"
        :class="[{ 'before:hidden': !isOpen }]"
    >
      <slot name="menu-label" />
      <span
        class="ml-2 w-2 text-[#889BA0] group-hover:text-pink"
    >
        <svg
            :class="[isOpen ? 'rotate-180' : 'rotate-0']"
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
        v-show="isOpen"
        :static="isOpen"
        class="mega-menu-wrapper bg-white absolute top-14 left-1/3 z-[100] mb-10 -translate-x-1/3 max-h-[80vh] overflow-y-auto px-5 py-5 origin-top-right rounded-2xl"
    >
      <div class="mega-menu-label text-[#97A3B7] text-base xl:text-lg font-bold mb-3">{{ menuLabel }}</div>
      <div class="grid grid-cols-2 gap-14">
        <div class="flex flex-col gap-4">
          <template v-for="option in firstMenuList">
            <router-link
                v-if="option?.pathName"
                :to="{ name: option.pathName, params: option?.param }"
                @click="toggleMenu"
            >
              <div class="flex gap-4 cursor-pointer">
                <div class="menu-icon w-6 h-6 bg-[#BFECFD] mt-1.5"></div>
                <div class="menu-labels">
                  <div class="sub-menu-link text-primary text-base font-bold">{{ option.label }}</div>
                  <div class="sub-menu-subtitle text-base-gray text-sm">{{ option.subTitle }}</div>
                </div>
              </div>
            </router-link>
          </template>
        </div>
        <div class="flex flex-col gap-4">
          <template v-for="option in secondMenuList">
            <router-link
                v-if="option?.pathName"
                :to="{ name: option.pathName, params: option?.param }"
                @click="toggleMenu"
            >
              <div class="flex gap-4">
                <div class="menu-icon w-6 h-6 bg-[#BFECFD] mt-1.5"></div>
                <div class="menu-labels">
                  <div class="sub-menu-link text-primary text-base font-bold">{{ option.label }}</div>
                  <div class="sub-menu-subtitle text-base-gray text-sm">{{ option.subTitle }}</div>
                </div>
              </div>
            </router-link>
          </template>
        </div>
      </div>

      <slot name="menu-footer" />
    </MenuItems>
  </Menu>
</template>

<style scoped lang="scss">
.mega-menu-btn{
  z-index: 1111;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 17px 17px 17px;
    border-color: transparent transparent #ffffff transparent;
  }
}
.mega-menu-wrapper{
  width: 650px;
  box-shadow: 0 24px 56px 0 rgba(167, 174, 186, 0.16);
}
</style>