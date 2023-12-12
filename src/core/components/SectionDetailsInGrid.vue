<template>
  <section class="section-container bg-primary">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div
          class="flex justify-center px-1 md:px-3 lg:px-0 py-24 md:py-[149px]"
          :class="[headingVerticalPosition]"
      >
        <div class="w-full lg:w-3/4 px-3 md:px-0 lg:px-8">
          <img
              v-if="showImage"
              :src="image?.path"
              :alt="image?.alt"
          >
          <h2 class="text-white text-3xl md:text-5xl">
            <span class="text-secondary">{{ highlightedText }}</span>
            {{ headingText }}
          </h2>
          <AppButton
              v-if="showBtn"
              is-link
              :to="{ name: 'DevDockContactUs' }"
              secondary
              class="mt-8"
          >
            Direct Contact
          </AppButton>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <template v-for="(data, index) in cardsData" :key="index">
            <div
                class="group border-2 border-b-0 border-x-0 sm:border-x-2 border-white border-opacity-50 cursor-pointer transition hover:bg-secondary"
                :class="{
                    'sm:border-r-0': index % 2 === 0,
                    'sm:col-span-2': index + 1 === fullSpanCell
                }"
            >
              <div class="flex items-center h-72 sm:h-[400px] px-3 sm:px-7 md:px-[21px]">
                <div class="text-white flex-1">
                  <span class="text-4xl md:text-[53px] transition group-hover:text-primary opacity-2">
                    {{ `${index + 1}.` }}
                  </span>
                  <div class="pt-10 transition group-hover:pt-10">
                    <span
                        class="text-secondary text-4xl group-hover:text-primary"
                        :class="[`icon-${data.icon}`]"
                    />
                    <div class="flex gap-3 xl:gap-8 justify-between items-center pt-5">
                      <h3 class="text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-medium sm:pr-5 transition group-hover:text-black group-hover:mb-2">
                        {{ data.title }}
                      </h3>
                      <span class="i-mdi-arrow-right w-9 h-9 md:w-12 md:h-12 transition group-hover:hidden" />
                    </div>
                    <p class="text-black text-sm 2xl:text-lg leading-6 md:leading-7 hidden transition group-hover:block">
                      {{ data.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from "@/core/components/AppButton.vue";

const props = defineProps({
  showBtn: {
    type: Boolean,
    required: true
  },
  showImage: {
    type: Boolean,
    required: true
  },
  image: {
    type: Object,
    required: true
  },
  highlightedText: {
    type: String,
    required: true
  },
  headingText: {
    type: String,
    required: true
  },
  headingPosition: {
    type: String,
    required: true
  },
  cardsData: {
    type: Array,
    required: true
  },
  fullSpanCell: {
    type: Number,
    required: true
  }
})

const headingVerticalPosition = computed(() => {
  if (props.headingPosition === 'top') return 'items-start'
  else if (props.headingPosition === 'center') return 'items-center'
  else if (props.headingPosition === 'bottom') return 'items-end'
})
</script>
