<template>
  <section class="service-faqs container pb-20 text-primary">
    <div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl 2xl:text-6.2xl font-semibold !leading-tight inline-block mr-28 md:mr-16">
        {{ serviceFaqs.heading }}
      </h2>
      <div class="grid md:grid-cols-2 md:gap-x-20 pt-10">
        <div class="col-span-1">
          <div v-for="(item, index) in firstColItems" :key="index">
            <div @click="toggleItem(0, index)" class="cursor-pointer py-3">
              <div class="flex justify-between items-center gap-8 font-semibold">
                <span>{{ item.title }}</span>
                <span
                    class="text-dark-gray shrink-0"
                    :class="{'i-carbon-chevron-down': !isOpen[0][index],
                     'i-carbon-chevron-up': isOpen[0][index]}"
                />
              </div>
            </div>
            <div v-if="isOpen[0][index]" class="pb-3" :class="{'hidden': !isOpen[0][index]}">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div v-for="(item, index) in secondColItems" :key="index">
            <div @click="toggleItem(1, index)" class="cursor-pointer py-3">
              <div class="flex justify-between items-center gap-8 font-semibold">
                <span>{{ item.title }}</span>
                <span
                    class="text-dark-gray shrink-0"
                    :class="{'i-carbon-chevron-down': !isOpen[1][index],
                     'i-carbon-chevron-up': isOpen[1][index]}"
                />
              </div>
            </div>
            <div v-if="isOpen[1][index]" class="pb-3" :class="{'hidden': !isOpen[1][index]}">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  serviceFaqs: {
    type: Object,
    required: true
  }
})
const firstColItems = ref([]);
const secondColItems = ref([]);

props.serviceFaqs?.list.forEach((faq, index) => {
  if (index < 4) firstColItems.value.push(faq)
  else secondColItems.value.push(faq)
})

const isOpen = ref([
  Array(firstColItems.value.length).fill(false),
  Array(secondColItems.value.length).fill(false),
]);
const toggleItem = (colIndex, index) => {
  for (let i = 0; i < isOpen.value.length; i++) { // closes other expanded faqs
    for (let j = 0; j < isOpen.value[i].length; j++) {
      if (i !== colIndex || j !== index) isOpen.value[i][j] = false;
    }
  }
  isOpen.value[colIndex][index] = !isOpen.value[colIndex][index]
};
</script>

<style scoped lang="scss">
//.service-faqs{
//  h2{
//    position: relative;
//    &::after{
//      content: '';
//      display: block;
//      position: absolute;
//      right: -110px;
//      top: 20px;
//      background-image: url("/svg/dashed_arrow.svg");
//      background-repeat: no-repeat;
//      background-size: contain;
//      width: 96px;
//      height: 56px;
//      @media(max-width: 450px) {
//        width: 70px;
//        right: -80px;
//        top: 10px;
//      }
//    }
//  }
//}
</style>
