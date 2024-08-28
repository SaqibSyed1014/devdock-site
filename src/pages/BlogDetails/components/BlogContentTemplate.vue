<script setup lang="ts">
import ShareBlogLinks from "@/pages/BlogDetails/components/ShareBlogLinks.vue";
</script>

<template>
  <section class="blog-detail-page">
    <div class="container">
        <div class="blog-detail">

          <div class="flex gap-8 mx-40">
            <ShareBlogLinks />

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
