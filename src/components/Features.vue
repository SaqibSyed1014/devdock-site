<template>
  <section class="container mb-20 md:mb-28">
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
                  <img class="mx-auto" :src="`/img/${feature.image}`" :alt="feature.alt">
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

const featuresData = [
  { startText: 'We offer', highlightedText: 'Customized', endText: 'approach', desc: 'We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.', image: 'connection.svg', alt: 'Connection', color: '#EBFAFE', darkText: true },
  { startText: 'We focus on', highlightedText: 'Educating', endText: 'your users', desc: 'Our agency boasts a team of seasoned professionals with years of experience in product development. We have a track record of delivering successful projects across various industries, ensuring your product is in capable hands.', image: 'laptop.svg', alt: 'Laptop', color: '#FFE8BC', darkText: true },
  { startText: 'We provide', highlightedText: 'Innovative', endText: 'solutions', desc: 'We pride ourselves on staying at the forefront of technology trends and innovation. When you choose our agency, you gain access to cutting-edge solutions and approaches that can give your product a competitive edge in the market.', image: 'lens.svg', alt: 'Lens', color: '#BCDFFF', darkText: true },
  { startText: 'Timely Delivery', highlightedText: '&&', endText: 'Cost Efficiency', desc: 'We are committed to delivering your product on time and within budget. Our efficient project management processes and cost-effective strategies help you maximize the return on your investment while minimizing potential delays.', image: 'sparrow.svg', alt: 'Sparrow', color: 'primary', darkText: false },
]

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


  // Add an event listener to watch for scroll events
  // Apply the scale transformation to the element

  // ScrollTrigger.create({
  //   trigger: '.blue-box',
  //   start: 'top bottom', // Adjust the trigger start position as needed
  //   end: 'bottom bottom', // Adjust the trigger end position as needed
  //   scrub: true, // Enables scrubbing for smooth scrolling
  //   markers: true,
  //   onUpdate: (self) => {
  //     const progress = self.progress;
  //     const scaleFactor = 1 - progress * 0.2; // Adjust the factor as needed
  //     tl.to(elementToAnimate.value, { scale: scaleFactor });
  //   },
  //   toggleClass: 'scrolling-up', // Add a class when scrolling up
  // });
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
