<script setup lang="ts">
import BlogHeader from "@/pages/BlogDetails/components/BlogHeader.vue";
import BlogContentTemplate from "@/pages/BlogDetails/components/BlogContentTemplate.vue";
import RecentBlogs from "@/pages/BlogDetails/components/RecentBlogs.vue";
import BlogTags from "@/pages/BlogDetails/components/BlogTags.vue";

function scrollToContent(id :string) {
  const element = document.getElementById(id)
  element?.scrollIntoView({
    behavior: "smooth"
  })
}
</script>

<template>
  <BlogHeader title="jd" sub-title="jd" blog-image="" />

  <BlogContentTemplate>
    <template #table-contents>
        <p class="indexed-link" @click="scrollToContent('sectionOne')">Embracing Tomorrow: A Guide to the Latest Tech Trends</p>
        <ol class="ml-8">
          <li class="indexed-link" @click="scrollToContent('sectionTwo')">1. Artificial Intelligence (AI) Revolution</li>
          <li class="indexed-link" @click="scrollToContent('sectionThree')">2. Internet of Things (IoT) Connectivity</li>
        </ol>
        <p class="indexed-link" @click="scrollToContent('sectionFour')">Conclusion</p>
    </template>

    <template #blog-content>
      <p>
        In today's fast-paced digital world, small businesses face unprecedented challenges and opportunities.
        To
        compete and succeed, they need robust, efficient, and scalable software solutions. DevDock is here to
        help.
        We specialize in crafting custom software tailored to the unique needs of small businesses. Our expert
        team
        understands the challenges you face and can provide solutions that drive growth, increase
        productivity, and
        enhance customer satisfaction.
        From developing intuitive e-commerce platforms to creating efficient operational tools, DevDock is
        your
        partner in digital transformation. We combine technical expertise with a deep understanding of small
        business operations to deliver software that truly makes a difference. By leveraging our services, you
        can
        focus on what you do best while we handle the complexities of software development.
        Let DevDock be your catalyst for success. Our commitment to your business extends beyond the
        development
        phase. We provide ongoing support and maintenance to ensure your software continues to meet your
        evolving
        needs. Together, we can build a digital foundation that propels your business forward.
      </p>
      <h3 id="sectionOne">
        Embracing Tomorrow: A Guide to the Latest Tech Trends
      </h3>
      <p>
        In the ever-evolving landscape of technology, staying ahead of the curve is crucial. Whether you're a
        tech
        enthusiast, a business owner, or simply curious about what the future holds, understanding current
        trends
        can provide valuable insights into where innovation is heading. Let's delve into some of the most
        exciting
        developments shaping our digital future:
      </p>

      <h4  id="sectionTwo">1. Artificial Intelligence (AI) Revolution</h4>
      <p>AI continues to redefine industries across the board, from healthcare to finance and beyond. Machine
        learning algorithms are becoming more sophisticated, enabling predictive analytics, personalized user
        experiences, and automation of repetitive tasks. As AI capabilities grow, so too does its potential to
        revolutionize how we work and live.</p>

      <h4 id="sectionThree">2. Internet of Things (IoT) Connectivity</h4>
      <p>The IoT ecosystem is expanding rapidly, connecting devices and systems in ways previously
        unimaginable.
        From smart homes and cities to industrial applications, IoT is enhancing efficiency, productivity, and
        convenience. Expect to see more interconnected devices optimizing everyday life and business
        operations.</p>

      <h3 id="sectionFour">Conclusion</h3>
      <p>The future of technology is bright and full of possibilities. By embracing these trends and staying
        informed, individuals and businesses alike can harness innovation to drive meaningful change and stay
        competitive in a rapidly evolving world. Stay curious, adapt to change, and prepare to embrace the
        exciting
        tech-driven future ahead!</p>
    </template>

    <template #blog-tags>
      <BlogTags />
    </template>
  </BlogContentTemplate>

  <RecentBlogs />
</template>
