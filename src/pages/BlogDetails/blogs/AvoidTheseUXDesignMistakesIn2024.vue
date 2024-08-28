<script setup lang="ts">
import { ref } from 'vue';
import BlogHeader from "@/pages/BlogDetails/components/BlogHeader.vue";
import BlogContentTemplate from "@/pages/BlogDetails/components/BlogContentTemplate.vue";
import RecentBlogs from "@/pages/BlogDetails/components/RecentBlogs.vue";
import BlogTags from "@/pages/BlogDetails/components/BlogTags.vue";
import pageData from "@/core/constants/blogs.json";
import TableOfContents from "@/pages/BlogDetails/components/TableOfContents.vue";
import { Blog } from "@/core/types/blogs.type.ts";
import BlogContentSection from "@/pages/BlogDetails/components/BlogContentSection.vue";
import BlogContentBlock from "@/pages/BlogDetails/components/BlogContentBlock.vue";

let selectedBlog = ref<Blog>(pageData.blogs[5]);
</script>

<template>
  <div class="relative">
    <BlogHeader :title="selectedBlog.title" :sub-title="selectedBlog.subTitle" :blog-image="selectedBlog.image.path"/>

    <BlogContentTemplate>
      <template #table-contents>
        <TableOfContents :table-contents="selectedBlog.tableContentLinks"/>
      </template>

      <template #blog-content>
        <BlogContentSection heading="" heading-id="">
          <p>Designing for great user experience does not only give better indexes for user satisfaction and more user
          engagement; it also means heavy business growth and financial returns.</p>

          <BlogContentBlock
              sub-heading="Key Takeaways:"
              sub-heading-id=""
          >
            <p>An experienced branding and UX/UI design expert, the success of a brand cannot be separated from a focus
              on user experience. One of the stories of Designbull's success is when a client's cash flow application
              increased user engagement and achieved 20x return on investment, really showing the impact that effective
              UX can bring about.</p>
          </BlogContentBlock>
        </BlogContentSection>

        <BlogContentSection
            heading="Essential Steps for Improving UX and Avoiding Mistakes"
            heading-id=""
        >

          <BlogContentBlock sub-heading="Conduct User Research" sub-heading-id="">
            <p><b>Know Your Audience:</b> Research user needs, behaviors, and pain points through surveys, interviews, and
              usability testing.<br>
              <b>Develop User Personas:</b> Personas drive design decisions, ensuring that a website caters to all the needs
              of a target audience.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Wireframing and Prototyping" sub-heading-id="">
            <p><b>Outline Content Flow:</b> Map the journey and layout of a user with wireframes before getting into
              detailed design.<br>
              <b>Test Functionality:</b> Come up with prototypes and test for usability to fine-tune functionality.</p>

          </BlogContentBlock>

          <BlogContentBlock sub-heading="Iterative Design Process" sub-heading-id="">
            <p><b>Test, Refine Based on Feedback:</b> Test continually and revise designs further based on user feedback
              for developing functionality and improving aesthetics. The Art of Balancing Aesthetics and Usability—Balancing
              aesthetics and usability, Andy pointed out that a middle path should be adopted for the same.</p>

            <img src="/img/blogs/blog-six/tasks.webp" alt="Tasks">

            <p><b>This can be done through the following steps, or principles:</b></p>

            <p>
              <b>Simplicity:</b> A clean, simple design will guide users intuitively.<br>
              <b>Consistency:</b> A consistent design applies design elements in a consistent manner – for example
              colors, fonts, icons, etc., to create visual cohesion.<br>
              <b>Accessibility:</b> Follow WCAG 2.0 for accessible design that any person could use.<br>
              <b>Feedback and Testing:</b> Get regular feedback from users and test for usability so that all the
              shortcomings could be noted and dealt with.
            </p>
          </BlogContentBlock>
        </BlogContentSection>

        <BlogContentSection
            heading="Common mistakes of UX/UI design to avoid Overly complicated navigation menus"
            heading-id="commonUiUxMistakes"
        >
          <BlogContentBlock sub-heading="" sub-heading-id="">
            <p>
              Simplify Navigation Structuring intuitive and clear navigation will help users find what they want easily.
            </p>

            <p><b>Lack of Mobile Optimization:</b> Make sure Responsiveness Optimization for mobile devices helps not to lose
              potentials because of high bounce rates; instead, it makes a user experience way better.</p>

            <p><b>Inconsistent Design Elements:</b>
              Create Consistency in Design Elements: Consistency in design elements will prevent confusion in the minds
              of users and portray uniformity in the brand.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Slow Load Times" sub-heading-id="">
            <p><b>Performance Optimization:</b> Create methods to better the site speed, such as lowering bounce rates
              with techniques like high-resolution image compression and lightening bulky code.</p>

            <p><i>How AI Can Enhance UX<br>
              AI tools, can significantly boost user experience by:</i></p>

            <p>
              <b>Recommendation Engines:</b> With NLP, making product recommendations to customers in eCommerce is now
              possible.<br>
              <b>Chatbots:</b> Great improvement in customer support is possible with the help of chatbots based on NLP.<br>
              <b>Predictive Analytics:</b> Demonstrate effective understanding of the user's needs and behaviors to
              provide relevant, personalized content and recommendations.
            </p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="DevDock Opinion about AI" sub-heading-id="DevDockOpinion">
            <p>The opportunities opened up by AI in improving efficiency in web development come with associated risks
              relating to transparency and privacy issues. It's foremost that AI solutions must develop according to the
              unique needs and problems for each business and that AI-driven ideas need to be experimented with so as
              not to lose creative diversity or unique user experiences.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Trend 2024: Investments in AI and Data Analytics" sub-heading-id="2024Trend">
            <p>Rather than investing in fleeting design trends on the web, the investment in AI and data analytics will
              enable brands to gather and analyze user data in a way that will create the means to deliver personalized
              content, enhance user experiences, and drive deeper engagement and loyalty.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Conclusion" sub-heading-id="conclusion">
            <p>Now one has to keep the investment going in AI and data analytics and stay focused on the user to drive
              engagement and brand growth.</p>
            <p>Combining that with advanced tools and technologies will help level up your brand for massive growth while
              setting the stage for truly exceptional user experiences in 2024.</p>
          </BlogContentBlock>
        </BlogContentSection>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

  <RecentBlogs :recent-blogs-index="[3, 7, 2]" />
</template>
