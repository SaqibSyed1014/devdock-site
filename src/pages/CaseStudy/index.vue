<template>
  <header class="bg-sky pb-8 md:pb-14 pt-[155px]">
    <div class="container">
      <div class="md:w-3/4 lg:w-2/4 mx-auto text-center mb-20 md:mb-36">
        <h4 class="text-base opacity-8 font-semibold">Alleo.ai</h4>
        <h1 class="text-primary text-4xl md:text-6xl font-semibold">
          AI smart personal life optimization tool</h1>
        <div class="flex justify-center flex-wrap md:flex-nowrap gap-4 md:gap-6 text-sm text-base-gray pt-5">
          <div class="flex items-center gap-2">
            <span class="i-bi-send w-5 h-5"/>
            <label>USA</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-icon-park-outline-new-computer w-5 h-5" />
            <label>Consumer Services</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-ph-squares-four-light w-5 h-5" />
            <label>Web</label>
          </div>
          <div class="flex items-center gap-2">
            <span class="i-carbon-tools-alt w-5 h-5" />
            <label>Personal tasks manager</label>
          </div>
        </div>
      </div>
    </div>

    <AppVideoPreview
        :show-btn="false"
        :show-preview-heading="false"
    />
  </header>

  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <small class="text-orange text-sm">ClIENT & BUSINESS CHALLENGE</small>
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          “Connecting dots between all areas of life”
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg">
        <p class="text-primary py-5">
          <b>Our client is a startup company based in the USA that improves the lives of
            individuals with work-life integration.</b>
        </p>
        <p>
          As a start-up, the client faced the difficult challenge of building a viable life
          optimization tool that would cover a wide audience and reduce time-to-market.
          At the core of the product, the client's primary requirement for the product was
          that it go beyond a simple personal tasks manager, have an easy and intuitive
          interface, and allow users to manage their entire lives all in one place. The client
          needed full-cycle software development, including digital product discovery,
          UI/UX design, web development, quality assurance and DevOps to produce the
          MVP version from scratch and scale up the digital solution afterward.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-sky">
    <div class="container py-10 md:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
        <div class="col-span-1 font-semibold">
          <small class="text-orange text-sm">PROJECT DESCRIPTION</small>
          <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
            “Creating an app
            that helps to turn
            chaos into order”
          </h5>
        </div>
        <div class="col-span-2 lg:pl-14 lg:text-lg">
          <p class="py-5">
            The client collaborated with our team which were fully responsible for creating a
            viable product within a tight deadline. The main objectives of developing a web
            application was:
          </p>
          <ul class="list-disc ml-8">
            <li>Be the first to market with an all-in-one-place for organizing and optimizing
              all main areas of lives in a single application</li>
            <li>Create an MVP version that allows seamlessly scaling it to new versions,
              with AI module, in the future </li>
            <li>Released the product to market in reduced time within the budget and
              without compromising the quality</li>
            <li>Design user interface as simple and powerful as possible making the
              application easier to use than the alternative software from the competitors.</li>
          </ul>
          <p class="py-5">
            BA team worked with the client to identify the initial product vision, project
            objectives, and ensured efficient communication between stakeholders. This
            approach kept scope creep to a minimum.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-10">
    <SectionWithFourBoxes
        :highlighted-text="highlightedText"
        :heading-text="pointsHeading"
        heading-position="center"
        :show-image="false"
        :show-btn="false"
        :cards-data="caseStudyPoints"
    />
  </div>

  <div class="container py-10 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <small class="text-orange text-sm">Proposed changes</small>
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          “How We Address the Solution”
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14 lg:text-lg">
        <p class="py-5">
          <strong>Our client is a startup company based in the USA that improves the lives of
            individuals with work-life integration.</strong>
        </p>
        <p class="pb-8">The project solution involves a complete redesign of the product's home page and dashboard, focusing on
          modern design, responsive layout, and intuitive user experience.</p>

        <p>Overall, the project solution completely redesigned the product's home page and dashboard, focusing on
          modern design, responsive layout, and intuitive user experience. The new design reflects the brand's values
          and gives a feel of tarot reading while providing e-commerce functionality and a complete backend/admin
          dashboard. In addition, the growth-driven design approach ensures that the website remains relevant and
          effective in the future.</p>

        <div class="pt-8">
          <b class="text-2xl">Technology Stack</b>
          <div class="flex items-center flex-wrap gap-5 py-5">
            <div v-for="(stack, index) in stacks" :key="index" class="text-center">
              <div class="w-14 h-14 bg-sky grid place-items-center p-2">
                <img :src="`/img/stack/${stack.image}`" alt="Image">
              </div>
              <label class="text-xs">{{ stack.name }}</label>
            </div>
          </div>
        </div>

        <b class="text-2xl">Check this project:</b><br>
        <AppButton class="my-5">
          <span class="i-mdi-web w-5 h-5 mr-2" />
          Web Url
        </AppButton>
      </div>
    </div>
  </div>

  <CaseStudySlider />

  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-5 pt-20">
      <div class="flex flex-col text-center justify-center sm:px-10">
        <h4 class="text-3xl md:text-4xl 2xl:text-5xl font-bold w-3/4 md:w-2/4 mx-auto">
          Ready to Elevate Your Project? Let's Talk!
        </h4>
        <div class="py-8">
          <img class="mx-auto" src="/public/svg/curve.svg" alt="Curve Underline">
        </div>
        <p class="text-base md:text-xl 2xl:text-2xl">Our experienced team is ready to listen to your needs, provide
          valuable insights, and tailor a customized solution that perfectly fits your goals.</p>
        <div>
          <AppButton class="mt-10">Direct Contact</AppButton>
        </div>
      </div>
      <div>
        <img src="/img/meeting.webp" alt="Client Meeting">
      </div>
    </div>

    <div class="py-10 md:py-28">
      <h3 class="text-primary text-4xl md:text-6xl font-semibold text-center">
        Explore Similar Endeavors
      </h3>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 pt-20">
        <template
            v-for="(content, i) in portfolioFilters[1].content"
            :key="i"
        >
          <AppPortfolioCard
              :content="content"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";
import SectionWithFourBoxes from "@/core/components/SectionDetailsInGrid.vue";
import AppPortfolioCard from "@/core/components/AppPortfolioCard.vue";
import { highlightedText, pointsHeading, caseStudyPoints } from "@/core/constants/portfolio-view";
import portfolioPageData from "@/core/constants/portfolio.json"
import AppButton from "@/core/components/AppButton.vue";
import CaseStudySlider from "@/pages/CaseStudy/components/CaseStudySlider.vue";

const portfolioFilters = portfolioPageData.portfolioFilters

const stacks = [
  { name: 'PHP', image: 'php.svg' },
  { name: 'Flutter', image: 'flutter.svg' },
  { name: 'Reactjs', image: 'reactjs.svg' },
  { name: 'Swift', image: 'swift.svg' },
  { name: 'Vuejs', image: 'vuejs.svg' },
  { name: 'Nodejs', image: 'nodejs.svg' },
]
</script>

<style scoped>

</style>
