<template>
  <div class="group cursor-pointer"
  >
    <div class="product-logo">
      <img
        :src="content.logo.path"
        :alt="content.logo.alt"
      >
    </div>
    <router-link
        :to="{ name: 'DevDockCaseStudyDetails',
        params: { title: content?.title } }
    ">
      <div
          class="project-image fancy-hover border border-dark-gray rounded hover:border-dark-gray/0 transition-all my-3 md:my-5"
      >
        <div class="overflow-hidden">
          <img
              :src="content?.image.path"
              :alt="content?.image.alt"
          >
        </div>
      </div>
    </router-link>

    <router-link
        :to="{ name: 'DevDockCaseStudyDetails',
         params: { title: content?.title } }
    ">
      <h2 class="description-text text-base md:text-xl 2xl:text-2xl text-primary font-medium pb-1 md:pb-1.5">
        {{ content.desc }}
      </h2>
      <p class="text-sm md:text-base text-base-gray 2xl:text-xl hover:text-pink transition cursor-pointer">
        View Case Study
      </p>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.product-logo{
  display: flex;
  align-items: flex-end;
  height: 50px;
  width: 120px;
  @media (max-width: theme('screens.sm')) {
    height: 40px;
  }
  img{
    object-fit: contain;
    height: 100%;
  }
}
.description-text{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
