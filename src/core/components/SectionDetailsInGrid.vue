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
          <h2 class="text-white text-3xl md:text-[50px] md:leading-[58px] font-bold">
            <span class="text-secondary">{{ highlightedText }}</span>
            {{ headingText }}
          </h2>
          <AppContactUsButton
              v-if="showBtn"
              secondary
              class="mt-8"
          />
        </div>
      </div>
      <div class="grid-container">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <template v-for="(data, index) in cardsData" :key="index">
            <div
                class="group border-[1px] border-x-0 border-b-0 sm:border-b-[1px] sm:border-x-[1px] border-white border-opacity-50 cursor-pointer transition hover:bg-secondary"
                :class="{
                    'sm:col-span-2': index + 1 === fullSpanCell
                }"
            >
              <div class="flex items-center h-80 sm:h-[400px] xl:h-[450px] px-3 sm:px-7 md:px-[21px]">
                <div class="text-white flex-1">
                  <span class="text-5xl md:text-[53px] transition group-hover:text-primary opacity-2">
                    {{ `${index + 1}.` }}
                  </span>
                  <div class="pt-10">
                    <span
                        class="text-secondary text-4xl group-hover:text-primary"
                        :class="[`icon-${data.icon}`]"
                    />
                    <div class="flex gap-3 xl:gap-8 justify-between items-center pt-5">
                      <h3 class="text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-medium sm:pr-5 text-white transition group-hover:text-primary">
                        {{ data.title }}
                      </h3>
                      <span class="i-mdi-arrow-right w-9 h-9 md:w-12 md:h-12 transition group-hover:hidden" />
                    </div>
                    <p class="text-primary text-sm 2xl:text-lg leading-6 md:leading-7 2xl:leading-9 hidden transition group-hover:!line-clamp-4 pt-5 pb-2">
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
import AppContactUsButton from "@/core/components/AppContactUsButton.vue";

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
  }
})

const headingVerticalPosition = computed(() => {
  if (props.headingPosition === 'top') return 'items-start'
  else if (props.headingPosition === 'center') return 'items-center'
  else if (props.headingPosition === 'bottom') return 'items-end'
})
</script>
