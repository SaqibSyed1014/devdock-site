<script setup>
import { siteName, contactEmail, contactNumber } from "@/core/constants/site-info.ts"
import footerData from "@/core/constants/footer.json"
import routesData from "@/core/constants/routes.json"
import contactData from "@/core/constants/contact-us.json"

const footerContent = footerData.footerContent
const route = routesData
const socialLinks = contactData.socialLinks

const currentDate = new Date()
</script>

<template>
  <footer class="bg-primary pt-14">
    <div class="footer-banner relative rounded-[10px] overflow-hidden py-4 px-4 md:px-7 mx-3 sm:mx-10">
      <div class="banner-bg" />
      <div class="flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 relative z-11">
        <div class="flex items-center">
          <img
              class="hidden md:block"
              src="/svg/right_arrow.svg"
              alt="Arrow"
              loading="lazy"
          >
          <h2 class="text-center md:text-left text-primary font-medium text-xl sm:text-2xl md:text-[32px] md:pl-[15px]">
            {{ footerContent.bannerHeading }}
          </h2>
        </div>
        <div class="flex mx-auto lg:mr-0 gap-4">
          <template v-for="social in socialLinks">
            <a
                :href="social.link"
                target="_blank"
                class="flex justify-center items-center rounded bg-white cursor-pointer w-10 h-10 xl:w-12 xl:h-12"
            >
              <span
                  class="text-xl xl:text-2xl text-primary"
                  :class="[`icon-${social.icon}`]"
              />
            </a>
          </template>
        </div>
      </div>
    </div>

    <div class="container py-10">
      <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-16 text-white">
        <div class="col-span-3 sm:col-span-3 md:col-span-3">
          <label class="text-[15px] 2xl:text-xl block pb-3">Email</label>
          <span
             class="text-xl 2xl:text-2xl md:text-extra font-bold"
          >
            {{ contactEmail }}
          </span>
          <label class="text-[15px] 2xl:text-xl block pb-3 pt-6">Whatsapp</label>
          <span
              class="text-xl 2xl:text-2xl md:text-extra font-bold"
          >
            {{ contactNumber }}
          </span>
        </div>
        <template
          v-for="(links, i) in footerContent.footerLinks"
          :key="i"
        >
          <div class="col-span-2">
            <h2 class="text-xl 2xl:text-2xl md:text-extra text-white font-bold pb-6">
              {{ links.heading }}
            </h2>
            <div class="flex flex-col gap-3 md:gap-4 text-sm 2xl:text-xl">
              <template
                  v-for="link in links.links"
                  :key="link"
              >
                <router-link
                  :to="{ ...link.path }"
                  class="opacity-8 hover:opacity-10 transition"
                >
                {{ link.label }}
                <span
                    v-if="link?.icon"
                    :class="[link.icon]"
                    class="w-5 h-5 translate-y-1"
                />
                </router-link>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>

    <hr class="border-t border-[#7EABA0]">

    <div class="copy-right py-5 md:py-[26px]">
      <div class="container text-center text-white">
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm 2xl:text-lg">
          <router-link :to="{ name: route.Home.name, force: true }">
            <img
                src="/svg/logo-white.svg"
                alt="DevDock"
                loading="lazy"
            >
          </router-link>
          <div>
            <span class="border-r-2 border-[#1F5346] pr-3 mr-3">
              <router-link :to="{ name: route.PrivacyPolicy.name, force: true }">
                Privacy Policy
              </router-link>
            </span>
            <router-link :to="{ name: route.TermsAndCondition.name, force: true }">
              Terms of Use
            </router-link>
          </div>
          <span>
            © Copyright
            {{ currentDate.getFullYear() }}
            <router-link :to="{ name: route.Home.name, force: true }">
              {{ siteName }}.
            </router-link>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

