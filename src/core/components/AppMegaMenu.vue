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
  routeTo: String,
  isOpen: Boolean,
  toggleMenu: Function,
})

const firstMenuList = []
const secondMenuList = []

props.options.forEach((option, index) => {
  if (index < props.options.length/2) firstMenuList.push(option)
  else secondMenuList.push(option)
})

const handleToggle = () => props.toggleMenu()
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
        :class="[{ 'before:hidden after:hidden': !isOpen }]"
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
        class="mega-menu-wrapper bg-white absolute top-14 left-1/3 z-[100] mb-10 -translate-x-1/3 border-[1px] border-dark-gray/50 max-h-[90vh] overflow-y-auto px-2 py-5 origin-top-right rounded-2xl"
    >
      <div class="flex items-center justify-between mega-menu-label mb-3 px-3">
        <div class="text-[#97A3B7] font-bold text-base">
          {{ menuLabel }}
        </div>
        <router-link
            v-if="routeTo"
            :to="{ name: routeTo, force: true }"
            class="text-sm text-primary hover:text-pink cursor-pointer transition"
        >
          View All
        </router-link>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-4">
          <template v-for="option in firstMenuList">
            <router-link
                v-if="option?.pathName"
                :to="{ name: option.pathName, params: option?.param, force: true }"
                @click="toggleMenu"
            >
              <div class="flex gap-4 cursor-pointer group hover:bg-pink hover:rounded px-3 py-2 transition">
                <div class="menu-icon text-base mt-1.5">
                  <span :class="[option.icon]"></span>
                </div>
                <div class="menu-labels">
                  <div class="sub-menu-link text-primary text-base font-bold truncate">
                    {{ option.label }}
                  </div>
                  <div class="sub-menu-subtitle text-base-gray text-sm group-hover:text-white transition">
                    {{ option.subTitle }}
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </div>
        <div class="flex flex-col gap-4">
          <template v-for="option in secondMenuList">
            <router-link
                v-if="option?.pathName"
                :to="{ name: option.pathName, params: option?.param, force: true }"
                @click="toggleMenu"
            >
              <div class="flex gap-4 cursor-pointer group hover:bg-pink hover:rounded px-3 py-2 transition">
                <div class="menu-icon text-base mt-1.5">
                  <span :class="[option.icon]"></span>
                </div>
                <div class="menu-labels">
                  <div class="sub-menu-link text-primary text-base 2xl:text-lg font-bold truncate">
                    {{ option.label }}
                  </div>
                  <div class="sub-menu-subtitle text-base-gray text-sm group-hover:text-white transition">
                    {{ option.subTitle }}
                  </div>
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
    top: 43px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent #ffffff transparent;
    z-index: 111;
  }
  &:after {
    content: "";
    position: absolute;
    top: 41.5px;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent rgb(136, 155, 160, .5) transparent;
    z-index: 11;
  }
}
.mega-menu-wrapper{
  width: 650px;
  box-shadow: 0 24px 56px 0 rgba(167, 174, 186, 0.16);
  @media (min-width: theme('screens.2xl')) {
    width: 700px;
  }
  .menu-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    text-align: center;
    background: #BFECFD;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    @media (min-width: theme('screens.2xl')) {
      width: 28px;
      height: 28px;
    }
  }
}
</style>