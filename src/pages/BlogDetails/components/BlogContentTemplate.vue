<script setup lang="ts">
import ShareBlogLinks from "@/pages/BlogDetails/components/ShareBlogLinks.vue";
</script>

<template>
  <section class="blog-detail-page">
    <div class="container">
        <div class="blog-detail">

          <div class="flex md:gap-3 lg:gap-8 lg:mx-20 2xl:mx-40">
            <div>
              <ShareBlogLinks />
            </div>

            <div>
              <slot name="table-contents"></slot>

              <div class="blog-content">
                <slot name="blog-content"></slot>
              </div>

              <slot name="blog-tags"></slot>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>
