<script setup lang="ts">
import { ref } from 'vue';
import BlogHeader from "@/pages/BlogDetails/components/BlogHeader.vue";
import BlogContentTemplate from "@/pages/BlogDetails/components/BlogContentTemplate.vue";
// import RecentBlogs from "@/pages/BlogDetails/components/RecentBlogs.vue";
import BlogTags from "@/pages/BlogDetails/components/BlogTags.vue";
import pageData from "@/core/constants/blogs.json";
import TableOfContents from "@/pages/BlogDetails/components/TableOfContents.vue";
import { Blog } from "@/core/types/blogs.type.ts";

let selectedBlog = ref<Blog>(pageData.blogs[0]);
</script>

<template>
  <div class="relative">
    <BlogHeader :title="selectedBlog.title" :sub-title="selectedBlog.subTitle" :blog-image="selectedBlog.image.path"/>

    <BlogContentTemplate>
      <template #table-contents>
        <TableOfContents :table-contents="selectedBlog.tableContentLinks"/>
      </template>

      <template #blog-content>
        <p>
          Some of these tools generate unique images while others perform non-design tasks like removing backgrounds or pairing fonts, improving your workflow and making good quality design more manageable to all even those without a background in design.
          AI tools as well release imagination to endless possibilities that are likely to be explored by both novices and designers who can thus have a wide array of artistic directions they may want to follow devoid of any resource-based limitations.
        </p>

        <section class="blog-content-section">
          <h3 id="sectionOne">
            Here, we shall look at top 12 AI graphic design tools for various stages in the creative process.
          </h3>

          <div class="blog-content-block">
            <h4>
              1. Designs.ai
            </h4>
            <p>
              Universal AI apparatus in the realm of comprehensive design solutions.<br>
              Designed as an all-in-one graphic design solution, Designs.ai can help create anything from logos to video
              production. With the help of a set of AI features, it provides ease in the completion of complicated tasks
              for pros and beginners alike. Having amassed a vast library of graphics, fonts, and design elements, it
              serves for single-stop ease in handling several design types on one platform.
            </p>
            <p>
              <b>Pricing:</b> Free seven-day trial; paid plans start at $19/month.
            </p>

            <img src="/img/blogs/blog-one/generative-ai.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              2. Adobe Sensei
            </h4>
            <p>
              The Best AI Tool to Be Used for Task Automation<br>
              Adobe Sensei applies machine learning and AI to automate work within the Creative Cloud suite:
              Illustrator, Photoshop, InDesign. It will do such things as repetitive tasks of object selection, masking,
              pattern recognition, and image improvement, therefore freeing a designer to do the final work and
              concentrating on creation rather than technical processing.
            </p>
            <p>
              <b>Pricing:</b> Part of Adobe Creative Cloud; plans start at $59.99/month.
            </p>

            <img src="/img/blogs/blog-one/adobe-sensei.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              3. Autodraw
            </h4>
            <p>
              Simplified Drawing with AI<br>
              Autodraw is a free tool developed by Google that allows you to turn rough sketches into polished drawings within seconds. It's ideal for very quick ideation or prototyping, using machine learning to predict and refine your drawing, providing a selection of professional-quality sketches to choose from.
            </p>
            <p>
              <b>Pricing:</b> Free
            </p>

            <img src="/img/blogs/blog-one/autodraw.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              4. Uizard
            </h4>
            <p>
              Easy Rapid Prototyping<br>
              Uizard— digital prototyping from sketching. With an intuitive interface and large libraries of drag-and-drops components, anyone can easily design prototypes in no time, be it a designer or not. It does text-to-image generation with a theme generator for quick design.
            </p>
            <p>
              <b>Pricing:</b> Free plan available; advanced plans start at $12/user per month.
            </p>

            <img src="/img/blogs/blog-one/uizard.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              5. Looka
            </h4>
            <p>
              AI-Powered Logo Design<br>
              Looka, once known as Logojoy, is an AI-powered online logo maker, which creates professional logo designs for you in a matter of a few clicks. It creates logos by understanding user preferences. This tool is especially useful for the entrepreneurs and small business owners who want to create a professional logo without big, graphically heavy tools.
            </p>
            <p>
              <b>Pricing:</b> Pay per logo; Basic Logo Package is $20; Premium Logo Package is $65.
            </p>

            <img src="/img/blogs/blog-one/looka.webp" alt="Generative AI Website">
          </div>
          <div class="blog-content-block">
            <h4>
              6. Let’s Enhance
            </h4>
            <p>
              Easy Rapid Prototyping<br>
              Let's Enhance uses Artificial Intelligence to upscale an image up to 16 times its original size without losing a single detail or texture. This basically becomes the perfect tool to breathe life into blurry images and turn them into high-resolution visuals fit for screen and print.
            </p>
            <p>
              <b>Pricing:</b> Credit-based system; 10 free credits on signup, with plans starting at $9/month for 100 credits.
            </p>

            <img src="/img/blogs/blog-one/lets-enhance.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              7. Khroma
            </h4>
            <p>
              Easy Rapid Prototyping<br>
              Khroma creates color combinations based on your likes. On choosing favorites, it would create endless combinations in line with your style and help keep a uniformity across the designs. It would also provide color names, hex codes, RGB values, CSS codes, and accessibility ratings.
            </p>
            <p>
              <b>Pricing:</b> Free.
            </p>

            <img src="/img/blogs/blog-one/khroma.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              8. Remove.bg
            </h4>
            <p>
              Remove Backgrounds Effortlessly<br>
              Accomplish the task of background removal automatically; Remove.bg does it for a designer, saving them from manual editing. It can handle edges that are a bit challenging and offers options for transparent backgrounds, new backgrounds, or HD downloads.
            </p>
            <p>
              <b>Pricing:</b> Free for low-resolution images; subscription plans start at $9/month for 40 credits, or pay-as-you-go for $1.99 per credit.
            </p>

            <img src="/img/blogs/blog-one/remove-bg.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              9. Canva
            </h4>
            <p>
              AI-backed Design Layouts and Suggestions<br>
              Canva is one amazing platform to create a variety of visual content through one very user-friendly design tool. AI features, such as Magic Design, suggest layouts and design elements in accord with the input provided. Magic Resize from Canva adjusts any design for different formats, while keeping your work consistent across all platforms.
            </p>
            <p>
              <b>Pricing:</b> Free version available; professional plans start at $149.90/year.
            </p>

            <img src="/img/blogs/blog-one/canva.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              10. Sketch2Code
            </h4>
            <p>
              From Sketches to HTML<br>
              Microsoft's Sketch2Code AI-powered tool translates hand-drawn designs into HTML code at a much-accelerated speed. The tool allows for real-time collaboration and automates the translation of hand-drawn designs to the code, accomplishing this with less room for errors and higher efficiency.
            </p>
            <p>
              <b>Pricing:</b> Free
            </p>

            <img src="/img/blogs/blog-one/sketch2sketch.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              11. DreamStudio
            </h4>
            <p>
              High-Quality Image Generation<br>
              DreamStudio, which builds on Stable Diffusion, is a text-to-image generator that can make complex images from detailed prompts. It generates images in different styles and also could enhance existing photos, enabling it to be used for a variety of outputs from generating to post-processing images.
            </p>
            <p>
              <b>Pricing:</b> Pay-per-image model; approximately $1.18 for every 100 credits.
            </p>

            <img src="/img/blogs/blog-one/dream-studio.webp" alt="Generative AI Website">
          </div>

          <div class="blog-content-block">
            <h4>
              12. Fontjoy
            </h4>
            <p>
              Perfect Font Pairing with AI<br>
              Fontjoy is like applying deep learning to find an ideal match of fonts for your designs. It analyzes different features of fonts to suggest pairings that will complement each other, balancing the design and making it visually appealing while saving lots of time and guesswork.
            </p>
            <p>
              <b>Pricing:</b> Free
            </p>

            <img src="/img/blogs/blog-one/fontjoy.webp" alt="Generative AI Website">
          </div>
        </section>

        <section class="blog-content-section">
          <h3 id="sectionOne">
            Final Thoughts
          </h3>

          <p>
            AI graphic design tools are terribly efficient and accessible, allowing each and every individual to have a professional-looking design done easily. However, supervision by a human is important to keep the accuracy, quality, and brand consistency within its limits. With DevDock, review all AI-generated content easily by collecting feedback and collaboration.
          </p>
        </section>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

<!--  <RecentBlogs />-->
</template>
