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
    <div class="grid lg:grid-cols-3 gap-3 md:gap-10">
      <div class="col-span-1 font-semibold">
        <small class="text-orange text-sm">ClIENT & BUSINESS CHALLENGE</small>
        <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
          “Connecting dots between all areas of life”
        </h5>
      </div>
      <div class="col-span-2 lg:pl-14">
        <p class="py-5">
          Our client is a startup company based in the USA that improves the lives of
          individuals with work-life integration.
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
      <div class="grid lg:grid-cols-3 gap-3 md:gap-10">
        <div class="col-span-1 font-semibold">
          <small class="text-orange text-sm">PROJECT DESCRIPTION</small>
          <h5 class="text-primary text-3xl md:text-5xl md:leading-[64px]">
            “Creating an app
            that helps to turn
            chaos into order”
          </h5>
        </div>
        <div class="col-span-2 lg:pl-14">
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
        :show-btn="false"
        :cards-data="caseStudyPoints"
    />
  </div>
</template>

<script setup>
import AppVideoPreview from "@/core/components/AppVideoPreview.vue";
import SectionWithFourBoxes from "@/core/components/SectionWithFourBoxes.vue"
import { highlightedText, pointsHeading, caseStudyPoints } from "@/core/constants/portfolio-view";
</script>

<style scoped>

</style>
