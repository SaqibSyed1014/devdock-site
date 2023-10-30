<template>
  <section class="container">
    <h3 class="text-center text-3xl sm:text-5xl font-medium pt-20 pb-16 sm:py-[100px] w-full lg:w-3/4 mx-auto">
      4 <span class="text-pink">Reasons</span>, Why You Should Use DevDock to Build Product
    </h3>

    <div class="feature-cards">
      <template v-for="(feature, index) in featuresData" :key="index">
        <div class="feature-card sticky top-0">
          <div class="feature-card-inner">
            <div
                class="rounded-[10px] text-center pt-20 pb-14 mb-3 bg-primary"
                :class="[feature.darkText?'text-primary':'text-white']"
                :style="{background: feature.color}">
              <div class="sm:w-3/4 mx-auto px-3">
                <h4 class="text-2xl sm:text-4xl font-medium pb-6">
                  {{ feature.startText }}
                  <span
                      class="rounded-[100px] px-5 uppercase"
                      :class="[feature.darkText?'bg-primary text-white':'bg-white text-primary']"
                  >{{ feature.highlightedText }}</span>
                  {{ feature.endText }}
                </h4>
                <p class="text-sm sm:text-lg sm:w-3/4 mx-auto leading-relaxed sm:leading-7">{{ feature.desc }}</p>
                <figure class="w-3/4 md:w-2/4 mx-auto px-3 pt-7">
                  <img class="mx-auto" :src="`/svg/${feature.image}`" :alt="feature.alt">
                </figure>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { featuresData } from "@/core/constants/home-view";
import { ScrollObserver, valueAtPercentage } from 'aatjs'

onMounted(() => {
  const cardsContainer = document.querySelector('.feature-cards')
  const cards = document.querySelectorAll('.feature-card')
  cardsContainer?.style.setProperty('--cards-count', cards.length)
  cardsContainer?.style.setProperty(
      '--card-height',
      `${cards[0].clientHeight}px`
  )
  Array.from(cards).forEach((card, index) => {
    const offsetTop = 20 + index * 20
    card.style.paddingTop = `${offsetTop}px`
    if (index === cards.length - 1) return
    const toScale = 1 - (cards.length - 1 - index) * 0.1
    const nextCard = cards[index + 1]
    const cardInner = card.querySelector('.feature-card-inner')
    ScrollObserver.Element(nextCard, {
      offsetTop,
      offsetBottom: () => window.innerHeight - card.clientHeight
    }).onScroll(({ percentageY }) => {
      cardInner.style.scale = valueAtPercentage({
        from: 1,
        to: toScale,
        percentage: percentageY
      })
    })
  })
});
</script>

<style scoped>
.feature-card-inner{
  will-change: transform;
  background: white;
  display: flex;
  transform-origin: center top;
}
</style>
