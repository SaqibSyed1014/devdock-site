<template>
  <div class="group">
      <div
          class="project-image fancy-hover"
      >
        <router-link
            :to="{
              name: 'DevDockCaseStudyDetails',
              params: { title: content?.title },
              force: true
            }"
        >
          <div class="overflow-hidden cursor-pointer">
            <img
                class="object-contain w-100 h-100"
                :src="content?.image.path"
                :alt="content?.image.alt"
            >
          </div>
        </router-link>
      </div>

    <router-link
        :to="{
           name: 'DevDockCaseStudyDetails',
           params: { title: content?.title },
           force: true
         }"
        class="cursor-pointer"
    >
      <h2 class="description-text">
        {{ content.desc }}
      </h2>
      <p class="view-detail-btn">
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
.description-text{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
