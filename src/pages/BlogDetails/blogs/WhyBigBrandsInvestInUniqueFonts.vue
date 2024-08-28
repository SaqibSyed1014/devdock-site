<script setup lang="ts">
import { ref } from 'vue';
import BlogHeader from "@/pages/BlogDetails/components/BlogHeader.vue";
import BlogContentTemplate from "@/pages/BlogDetails/components/BlogContentTemplate.vue";
// import RecentBlogs from "@/pages/BlogDetails/components/RecentBlogs.vue";
import BlogTags from "@/pages/BlogDetails/components/BlogTags.vue";
import pageData from "@/core/constants/blogs.json";
import TableOfContents from "@/pages/BlogDetails/components/TableOfContents.vue";
import { Blog } from "@/core/types/blogs.type.ts";
import BlogContentSection from "@/pages/BlogDetails/components/BlogContentSection.vue";
import BlogContentBlock from "@/pages/BlogDetails/components/BlogContentBlock.vue";

let selectedBlog = ref<Blog>(pageData.blogs[3]);
</script>

<template>
  <div class="relative">
    <BlogHeader :title="selectedBlog.title" :sub-title="selectedBlog.subTitle" :blog-image="selectedBlog.image.path"/>

    <BlogContentTemplate>
      <template #table-contents>
        <TableOfContents :table-contents="selectedBlog.tableContentLinks"/>
      </template>

      <template #blog-content>
        <p>Brittney Murphy is a typography expert and owner of Brittney Murphy Design, where she says that creating a
          custom font is not about the aesthetics, but actually a strategic move for brand recognition and
          consistency.</p><br>

        <p>On the key features of custom fonts and their relevance to brand growth. These include:<br>
          <i>The impact of custom fonts on brand growth</i><br>
          <i>How fonts should accord with brand identity</i><br>
          <i>Ways to choose the right font for your brand</i><br>
          <i>Power of custom fonts</i></p>

        <BlogContentSection
            heading=""
            heading-id=""
        >
          <BlogContentBlock
              sub-heading="1. Why Develop a Custom Font?"
              sub-heading-id=""
          >
            <p>Custom fonts could turn out to be one of the best ways towards brand recognition and identity. So, here's
              why they prove game-changing:</p>

            <p>
              <b>Brand Awareness:</b>
              With a strong, different font, a brand becomes more visible amidst the noise that's going on in the market. As Brittney comments, "It's one thing to flash your logo everywhere, but with an exclusive font, your business can be recognized in more contexts and with more subtlety." An original font will make sure your brand remains both prominent and unforgettable, reducing the chances of potential customers confusing it with other brands.
            </p>

            <p>
              <b>Consistency Across Mediums:</b>
              A custom font allows brands to maintain uniformity across all mediums and media. This consistency is begetter of reliability and trustworthiness with the consumers.
            </p>

            <p><b>Emotional Context:</b>
              Fonts carry an emotional undertone and can change the way a message from a brand is
              perceived by its audience. Brittney says, "Fonts add emotional context to your words", so the right font
              can really bring out the point of your messaging.</p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="2. Aligning Fonts with Brand Identity"
              sub-heading-id=""
          >
            <p>To go about effortlessly integrating a custom font into your brand, follow these steps:</p>

            <p><b>Define Your Brand Personality:</b> This relates to the character and values that your brand keeps. Take the
              case of a light, fun brand—its font would probably be playful, and for a professional service, clean and
              modern.</p>

            <p><b>Test and Iterate:</b> Try many fonts until you find the one that really says something to your brand. Mock up
              graphics featuring different fonts, then take feedback from your audience so you can come to an educated
              decision.</p>

            <p><b>Keep it Versatile:</b> Use a font family that has several styles, like regular, bold, and italic, for maximum
              flexibility across different contexts and formats.</p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="3. Choosing the Right Fonts"
              sub-heading-id=""
          >
            <p>
              The right bespoke font requires just a few considerations:
            </p>

            <p><b>Font Research:</b> Study how extremely successful brands handle fonts and what made them successful. This could
              help provide not just inspiration but also role modeling in the development process.</p>

            <p><b>Professional Design:</b> Pair up with professional, well-experienced typographers that will help ensure your
              custom font is both well-designed and functional. Brittney Murphy's experience echoes the importance of
              professional input in creating high-quality fonts.</p>

            <p><b>Readability:</b> Be sure your typography performs on different media and in various sizes. What looks wonderful
              in print may not translate so beautifully to digital screens.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="The Role of 3D Fonts in Branding" sub-heading-id="">
            <p>3D fonts are trendy, but Brittney cautions against using them for branding :</p>

            <img src="/img/blogs/blog-four/brand.webp" alt="Brand">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Fun but Limited:" sub-heading-id="">
            <p>Although 3D fonts could be fun, creating some sort of dynamic effect on a design, Brittney feels they are
              not always useful for the continuous branding of a company. She suggests that it is always best to have a
              non-3D version to help in consistency across different contexts.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Versatility:" sub-heading-id="">
            <p>Go for those font families that give a variety in styles, having both 3D and non-3D versions. This makes
              your brand versatile without losing readability.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Conclusion" sub-heading-id="">
            <p>A custom font will impact your brand's identity and, therefore, its recognition. It means that creating a
              bespoke font reflects your brand's personality, enhancing consistency, emotional connection, and
              visibility. Collaborate with an expert, try a few, and select a font that pays homage to your brand's
              essence, is versatile, and functional across platforms.</p>
          </BlogContentBlock>
        </BlogContentSection>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

<!--  <RecentBlogs />-->
</template>
