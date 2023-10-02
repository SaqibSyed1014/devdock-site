<template>
    <nav
        class="nav-container w-full items-center h-20 md:h-[90px] flex items-center px-3 z-30"
        :class="[showMobileMenu ? 'bg-white' : 'bg-sky', isScrollingDown ? 'nav-hidden' : 'nav-fixed']"
    >
      <div class="flex items-center justify-between grow">
        <figure>
          <router-link
              class="sm:mx-2 my-1 md:mb-0 md:mt-0"
              to="/">
            <img src="/public/img/logo.svg" alt="DevDock Logo" class="w-[70%] sm:w-3/4">
          </router-link>
        </figure>

        <!-- Collapsible navbar container -->
        <div class="hidden lg:flex items-center flex-grow basis-[100%] md:basis-auto md:mt-0 mt-2">
          <ul
              class="list-style-none mr-auto flex flex-col items-center pl-0 md:mt-1 md:flex-row gap-6 text-[15px] font-medium"
          >
            <li>
              <AppDropdown show-hover-color :options="['Account', 'Settings']">Services</AppDropdown>
            </li>
            <li class="cursor-pointer px-4 hover:text-pink transition">Portfolio</li>
            <li>
              <AppDropdown show-hover-color :options="['Account', 'Settings']">Resources</AppDropdown>
            </li>
            <li>
              <AppDropdown show-hover-color :options="['Account', 'Settings']">Company</AppDropdown>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-3 sm:gap-2 md:gap-5">
          <AppButton secondary class="shrink-0">View Portfolio</AppButton>
          <AppButton class="hidden lg:block shrink-0">Direct Contact</AppButton>
          <!-- Hamburger button for mobile view -->
          <div class="flex lg:hidden items-center text-primary" @click="showMobileMenu = !showMobileMenu">
            <span v-if="!showMobileMenu" class="i-solar-hamburger-menu-linear w-9 h-9"/>
            <span
                v-else
                class="i-ph-x w-9 h-9"
            />
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Navbar -->
    <div
        v-show="showMobileMenu"
        class="mobile-nav fixed w-full h-screen overflow-hidden top-20 overflow-hidden left-0 z-20"
    >
      <div class="bg-wrapper bg-white absolute top-0 left-0 h-full w-full" />
      <div class="mobile-nav-wrapper relative h-full">
        <nav class="h-full overflow-auto pt-3">
          <div class="mobile-nav-container my-8 px-3">
            <ul class="list-style-none">
              <li
                  v-for="(link, index) in menuLinks"
                  :key="index"
              >
                <p
                    class="menu-labels transition text-primary font-medium text-lg mb-3"
                    :style="{ '--index': index }"
                >
                  {{ link.label }}
                </p>
                <ul
                    v-if="link.subLinks.length"
                    class="list-style-none mb-7"
                >
                  <li
                      v-for="(subLink, i) in link.subLinks"
                      :key="i"
                      class="sub-menu-link transition text-sm py-2"
                      :style="{ '--subIndex': i }"
                  >
                    <router-link to="\">{{ subLink }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="nav-image transition relative pt-3 mb-40">
              <div class="nav-image-container overflow-hidden rounded-2xl">
                <img src="/public/img/rocket.png" alt="Rocket" :class="[showMobileMenu? 'zoom-in':'zoom-out']">
              </div>
              <div class="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4">
                <button
                    class="play-btn bg-white flex justify-center items-center rounded-full w-14 h-14 md:w-16 md:h-16 cursor-pointer"
                    @click="playDemoVideo = true"
                >
                  <span class="btn-control-icon i-mdi-play text-pink w-9 h-9 md:w-10 md:h-10"/>
                </button>
              </div>
              <h4 class="text-base absolute bottom-5 left-5 text-white font-bold">Product Tour</h4>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <video-player
        v-model:display="playDemoVideo"
        vid-source="https://www.surfe.com/wp-content/uploads/2023/06/Product-tour.mp4"
    />
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import AppButton from '@/core/components/AppButton.vue'
import AppDropdown from "@/core/components/AppDropdown.vue"
import VideoPlayer from '@/core/components/VideoPlayer.vue'

let showMobileMenu = ref(false)
const playDemoVideo = ref(false)

// Variables to track scroll position
const scrollY = ref(window.scrollY);
const isScrollingDown = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  if (!showMobileMenu.value && window.scrollY >= 450) {
    isScrollingDown.value = window.scrollY > scrollY.value;
    scrollY.value = window.scrollY;
  }
};

// Attach and remove scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})

watch(showMobileMenu, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})

const menuLinks = [
  { label: 'Services', subLinks: ['Account', 'Settings'] },
  { label: 'Portfolio', subLinks: [] },
  { label: 'Resources', subLinks: ['Account', 'Settings'] },
  { label: 'Company', subLinks: ['Account', 'Settings'] }
]
</script>

<style scoped lang="scss">
nav{
  font-family: Inter;
}
.pushed-up {
  transform: translateY(-100%);
  transition: transform 0.5s ease;
}
nav{
  &.nav-container{
    position: fixed;
    transition: transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    //transition-behavior: normal, normal;
    //transition-duration: 0ms, 3s;
    //transition-timing-function: linear, cubic-bezier(0.645, 0.045, 0.355, 1);
    //transition-delay: 0.2s, 0s;
    //transition-property: background-color, transform;
  }
  &.nav-hidden{
    transform: translateY(-100%);
  }
  &.nav-fixed{
    transform: translateY(0);
  }
}
.mobile-nav{
  .mobile-nav-wrapper {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      display: block;
      border: 1px solid #e0e5e6;
      animation: slideRight .8s cubic-bezier(.215, .61, .355, 1) forwards;
    }
  }
  .menu-labels, .sub-menu-link, .nav-image{
    opacity: 0;
    transition: opacity .35s linear 0ms, transform .9s cubic-bezier(.215, .61, .355, 1) 0ms;
  }
  .menu-labels{
    animation: linkListNavItem 1s calc(var(--index)*50ms) cubic-bezier(.19,1,.22,1) forwards;
    transition-delay: calc(var(--index)*50ms);
  }
  .sub-menu-link{
    animation: linkListNavItem 1.3s calc(var(--subIndex)*80ms) cubic-bezier(.19,1,.22,1) forwards;
    transition-delay: calc(var(--subIndex)*80ms);
  }
  .nav-image{
    animation: linkListNavItem 1.3s cubic-bezier(.19,1,.22,1) forwards;
    transition-delay: 2s;
  }
  .nav-image img{
    animation: zoom .55s cubic-bezier(.215,.61,.355,1);
    transition-delay: .2s;
  }
  .sub-menu-link{
    position: relative;
    &::after{
      border-bottom: 1px solid #bdedfc;
      content: "";
      height: 0;
      left: 0;
      bottom: 0;
      position: absolute;
      animation: slideRight .55s cubic-bezier(.215,.61,.355,1) forwards;
    }
  }
}
</style>
