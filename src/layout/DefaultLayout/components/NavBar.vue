<template>
    <nav
        class="nav-container w-full h-20 md:h-[90px] flex items-center z-30"
        :class="[showMobileMenu ? 'bg-white' : 'bg-sky', isScrollingDown ? 'nav-hidden' : 'nav-fixed']"
    >
      <div class="container">
        <div class="flex items-center justify-between">
            <router-link
                class="mr-4 xss:mr-0 my-1 md:mb-0 md:mt-0"
                :to="{ name: 'DevDockHome' }">
              <img :src="logoUrl" alt="DevDock">
            </router-link>

          <div class="hidden lg:flex items-center flex-grow basis-[100%] md:basis-auto md:mt-0 mt-2 ml-7 xl:ml-14">
            <ul
                class="list-style-none mr-auto flex flex-col items-center pl-0 mt-1 md:flex-row gap-3 xl:gap-5 text-base 2xl:text-lg font-medium"
            >
              <li v-for="(link, index) in menuLinks" :key="index">
                <AppMegaMenu
                    v-if="link.hasSubLinks"
                    :menu-label="link.megaMenuLabel"
                    :route-to="link?.pathName"
                    :options="link.subLinks"
                    :isOpen="openMenuIndex === index"
                    :toggleMenu="() => toggleMenu(index)"
                >
                  <template #menu-label>
                    <template v-if="link?.pathName">
                      <router-link
                          :to="{ name: link.pathName, force: true }"
                      >
                        {{ link.label }}
                      </router-link>
                    </template>
                    <template v-else>
                      {{ link.label }}
                    </template>
                  </template>
                  <template #menu-footer>
                    <div class="footer-banner relative rounded-[10px] overflow-hidden py-5 px-4 md:px-7 mt-3 mx-3">
                      <div class="banner-bg" />
                      <div class="flex justify-center items-center lg:mr-0 gap-4 text-primary relative z-11">
                        <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
                          <span class="i-ri-facebook-fill w-6 h-6" />
                        </div>
                        <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
                          <span class="i-mdi-twitter w-6 h-6" />
                        </div>
                        <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
                          <span class="i-ri-instagram-fill w-6 h-6" />
                        </div>
                        <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
                          <span class="i-mdi-linkedin w-6 h-6" />
                        </div>
                        <div class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10">
                          <span class="i-mdi-youtube w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </template>
                </AppMegaMenu>
                <router-link
                    v-else
                    active-class="text-pink"
                    class="px-3"
                    :to="{ name: link.pathName, force: true }"
                >
                  {{ link.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="flex items-center gap-2 xss:gap-3 md:gap-5">
            <AppButton
                v-if="route.name !== 'DevDockPortfolio'"
                secondary
                is-link
                :to="{ name: 'DevDockPortfolio' }"
                class="shrink-0"
            >
              View Portfolio
            </AppButton>
            <AppButton
                is-link
                :to="{ name: 'DevDockContactUs' }"
                class="hidden lg:block shrink-0"
            >
              Direct Contact
            </AppButton>

            <!-- Hamburger button for mobile view -->
            <div
                class="flex lg:hidden items-center text-primary text-3xl"
                @click="showMobileMenu = !showMobileMenu">
              <span
                  v-if="!showMobileMenu"
                  class="i-solar-hamburger-menu-linear"
              />
              <span
                  v-else
                  class="i-ph-x"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Navbar -->
    <div
        v-show="showMobileMenu"
        class="mobile-nav fixed w-full h-screen overflow-hidden top-20 left-0 z-20"
    >
      <div class="bg-wrapper bg-white absolute top-0 left-0 h-full w-full" />
      <div class="mobile-nav-wrapper relative h-full">
        <nav class="h-full overflow-auto pt-3">
          <div class="mobile-nav-container relative pb-10 pt-3 px-3">
            <div
                v-if="!showMobileSubMenuList"
                class="mobile-default-menu-list"
            >
              <ul class="list-style-none">
                <li
                    v-for="(link, index) in menuLinks"
                    :key="index"
                >
                  <p
                      v-if="!excludedRoutesOnMobile.includes(link?.pathName)"
                      class="menu-labels transition text-primary font-medium text-base mb-3"
                      :style="{ '--index': index }"
                  >
                    <div class="flex justify-between items-center">
                      <template v-if="link?.pathName">
                        <router-link :to="{ name: link.pathName, force: true }">
                          {{ link.label }}
                        </router-link>
                      </template>
                      <template v-else>
                        {{ link.label }}
                      </template>
                      <span
                          @click="showSubMenuList(link.subLinks)"
                          class="i-charm-chevron-right text-dark-gray text-2xl shrink-0"
                      />
                    </div>
                  </p>
                </li>
              </ul>
            </div>

            <div
                v-else
                class="mobile-sub-menu"
            >
              <button
                  class="back-nav-btn absolute top-2 left-2.5 flex items-center gap-1"
                  :style="{ '--subIndex': .2 }"
                  @click="backToDefaultList"
              >
                <span class="i-charm-chevron-left text-primary text-xl"></span>
                <span class="text-sm">Back</span>
              </button>
              <ul class="list-style-none pt-7">
                <li
                    v-for="(subLink, i) in mobileSubMenuList"
                    :key="i"
                    class="sub-menu-link transition text-sm py-2"
                    :style="{ '--subIndex': i }"
                >
                  <router-link
                      :to="{ name: subLink.pathName, params: subLink?.param, force: true }"
                  >
                    {{ subLink.label }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="nav-image transition relative pt-10 mb-40">
              <div class="nav-image-container overflow-hidden rounded-2xl">
                <img src="/img/rocket.webp" alt="Rocket" :class="[showMobileMenu? 'zoom-in':'zoom-out']">
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
import AppButton from '@/core/components/AppButton.vue'
import AppDropdown from "@/core/components/AppDropdown.vue"
import AppMegaMenu from "@/core/components/AppMegaMenu.vue";
import VideoPlayer from '@/core/components/VideoPlayer.vue'
import { useRoute } from 'vue-router'
import { logoUrl } from "@/core/constants/site-info.ts";
import { menuLinks } from "@/core/constants/common.ts";

let showMobileMenu = ref(false)
let playDemoVideo = ref(false)
const excludedRoutesOnMobile = ['DevDockPortfolio']
let showMobileSubMenuList = ref(false)
let mobileSubMenuList = ref([])
const openMenuIndex = ref(null);

const toggleMenu = (index) => openMenuIndex.value = openMenuIndex.value === index ? null : index

const closeMenus = () => openMenuIndex.value = null

const showSubMenuList = (list) => {
  mobileSubMenuList.value = list
  showMobileSubMenuList.value = true
}
const backToDefaultList = () => {
  mobileSubMenuList.value = []
  showMobileSubMenuList.value = false
}

const route = useRoute()

const scrollY = ref(window.scrollY);
const isScrollingDown = ref(false);

watch(route, () => {
  isScrollingDown.value = false
  if (showMobileMenu.value) showMobileMenu.value = false
})

const handleScroll = () => {
  closeMenus()
  if (!showMobileMenu.value && window.scrollY >= 450) {
    isScrollingDown.value = window.scrollY > scrollY.value;
    scrollY.value = window.scrollY;
  }
};

onMounted(() => window.addEventListener('scroll', handleScroll))

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

watch(showMobileMenu, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="scss">
nav{
  font-family: Inter, sans-serif;
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
  .menu-labels, .sub-menu-link, .back-nav-btn, .nav-image{
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
  .back-nav-btn{
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
