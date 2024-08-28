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

let selectedBlog = ref<Blog>(pageData.blogs[1]);
</script>

<template>
  <div class="relative">
    <BlogHeader :title="selectedBlog.title" :sub-title="selectedBlog.subTitle" :blog-image="selectedBlog.image.path"/>

    <BlogContentTemplate>
      <template #table-contents>
        <TableOfContents :table-contents="selectedBlog.tableContentLinks"/>
      </template>

      <template #blog-content>
        <p>Whether it is an in-house team or an external designer one is working with, a good design brief is
           important in guiding the entire design process, thus keeping all those involved in the project on the same
           page.</p><br>

          <p>A design brief is like a roadmap to the design process, setting clear parameters and expectations that help
            contributors remain focused. At DevDock, we strongly believe that there is great temptation to rush over the
            brief; however, a meticulously written, thoughtful design brief acts as a powerful catalyst for creativity
            and top-notch results.</p><br>

          <p>In this guide, we will consider what constitutes an effective design brief and how to compose one that
            guarantees outstanding results. We will consider how to set up a brief that gives rise to innovation, keeps
            everybody in line, and creates outstanding results. Now, let's dive into the important steps to develop a
            design brief that shines.</p>

        <BlogContentSection
            heading="Let's dive into the important steps to develop a design brief that shines."
            heading-id=""
        >
          <BlogContentBlock
              sub-heading="1. Definition of objectives and goals:"
              sub-heading-id=""
          >
            <p>
              First of all, one needs to set clear objectives and goals. Having no clear view of what is to be achieved will result in your project losing direction; the step is very essential both for the in-house and external design briefs.
            </p>

            <p>
              <b>In-House Briefs:</b>
              When working with an in-house team, there might not be quite so much of an issue in lining up on objectives simply because the team would already know the mission of the organization. It is, however, still essential to clearly specify certain project objectives within that framework of the company.
            </p>

            <p>
              <b>External Briefs:</b>
              When working with external designers, it's essential to provide loads of context about your organization and the goals of your projects. This might also include bringing clarity to external teams that are less familiar with your brand.
            </p>

            <p>
              <strong>Well, it all goes back to the answer to these five questions:</strong>
            </p>

            <em class="text-primary">
              What is the purpose of this design project?<br>
              What are we trying to communicate/achieve?<br>
              Who is our target audience, and what are their preferences?<br>
              Are there specific problems we're trying to solve?<br>
              What is the budget and the timeline for the project?<br>
            </em>

            <p>
              These would be the skeleton for your design brief and will let you make your objectives specific, measurable, relevant, and time-bound.
            </p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="2. Research and get an insight into your audience:"
              sub-heading-id=""
          >
            <p>
              Designing is not only to please the eyes but also a way of communicating the idea. So, understanding your target audience is necessary for both in-house and external briefs.
            </p>

            <p>
              <b>In-House Briefs:</b>
              Keep your audience research updated to ensure that the design aligns with present preferences and behaviors.
            </p>

            <p>
              <b>External Briefs:</b>
              Detail your audience, providing all demographic and psychographic information, and any other consumption habits. This helps external designers to know the kind of output to tailor to suit the needs of your audience
            </p>

            <p>
              <strong>Insights would include details such as:</strong>
            </p>

            <em class="text-primary">
              Age, gender, location, and other demographics<br>
              Interests, preferences, and lifestyle<br>
              Pain points, needs and desires<br>
              How they consume information – online, print, social media, etc.<br>
            </em>

            <p>
              Researching and studying your competitors and industry trends will also go a long way in helping your designers come up with something unique and outstanding.
            </p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="3. Identify Key Messages and Brand Identity:"
              sub-heading-id=""
          >
            <p>
              Define key messages to be communicated and the reinforcement of brand identity, a step one doesn't want to miss, whether it's in-house or external briefs.
            </p>

            <img src="/img/blogs/blog-two/researching.webp" alt="Researching">

            <p>
              <b>In-House Briefs:</b>
              Even when working with your internal team, you need to brief on any updates or specific areas in your brand identity.
            </p>

            <p>
              <b>External Briefs:</b>
              Provide insight into the mission, vision, and values of your brand. Branding guidelines that include color schemes, fonts, and imagery will guide consistency.
            </p>

            <p>
              <strong>Contains:</strong>
            </p>

            <em class="text-primary">
              Mission and vision statement of your brand<br>
              Brand guidelines—color schemes, fonts, and kind of imagery<br>
              Tone of voice
            </em>

            <p>
              Previous marketing material or campaign to compare and contrast<br>
              This will help designers come up with material consistent with your brand and deliver appropriate messages.
            </p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="4. Clearly spell out deliverables and specifications:"
              sub-heading-id=""
          >
            <p>
              Deliverables should be clearly specified for an internal or external design team. Clearly state what is expected to have excellent results.
            </p>

            <p>
              <b>In-House Briefs:</b>
              Even though in-house designers would have a greater familiarity with the technical specifications, it is always best to specify the kind of design required, the dimensions, what file formats are required, and other technical requirements.
            </p>

            <p>
              <b>External Briefs:</b>
              Clearly mention the deliverables with type of design, dimension, resolution, file format, and color details. Also, specify style or inspiration, if any.<br>
              Clearly specified guidelines reduce the chances of miscommunication and revisions. Hence, a smoother execution of a project.
            </p>
          </BlogContentBlock>

          <BlogContentBlock
              sub-heading="5. Define the Project Timeline and Budget:"
              sub-heading-id=""
          >
            <p>
              Well-defined scope of time and budget helps to keep everything on track.
            </p>

            <p>
              <b>In-House Briefs:</b>
              While internal projects may have more flexibility with budgets and timelines, realistic budgeting and scheduling for projects is still very critical for resource and expectation management.
            </p>

            <p>
              <b>External Briefs:</b>
              Clearly spell out the timeline by which different phases will be completed, indicating milestones and deadlines. Be very clear as to what is expected of cost parameters.<br>
              Spell out a contingency plan in case of last-minute changes or expenses that are off-track.
            </p>
          </BlogContentBlock>
        </BlogContentSection>

        <BlogContentSection
            heading="Differences between an In-House and an External Design Brief"
            heading-id=""
        >
          <p>
            Knowing the differences between in-house and external design briefs can help one tailor his approach accordingly:
          </p>

          <p>
            <b>In-House Briefs:</b>
            Familiarity with the brand, ongoing collaboration, easier communication, more control over resources.
          </p>

          <p>
            <b>External Briefs:</b>
            A fresh perspective, specialized expertise, unbiased views, and scaled resources. An external designer brings valuable experience and creativity to the table.<br>
            <b class="italic">Top Tip:</b> You may want to use a design brief template to make things easier. We have a really in-depth, comprehensive creative brief template you can use to get started.
          </p>

          <p>
            Making Sure Your Content Matches the Design Brief<br>
            Technology is here to help make your design process easier. DevDock design approval software helps you manage feedback and approvals fast and conveniently. With DevDock, you have the possibility to set up overviews of projects, invite reviewers, share designs easily, etc.
          </p>

          <BlogContentBlock
              sub-heading="Key features include:"
              sub-heading-id=""
          >
            <p><b>Comments:</b> Leave comments directly on your content<br>
              <b>Timecodes:</b> Automatically generate timecodes for video and audio files<br>
              <b>Annotations:</b> Provide feedback with markers, lines and boxes<br>
              <b>Attachments:</b> Add references and assets to comments<br>
              <b>Review Steps:</b> Keep comments organized by stakeholder<br>
              <b>Due Dates:</b> Set deadlines and send reminders<br>
              <b>To-Do Lists:</b> Make comments into actionable tasks<br>
              <b>Compare Versions:</b> See different versions side by side<br>
              <b>Status Indicators:</b> Know if a file is approved<br>
              <b>Integrations:</b> Integrate with project management tools</p>
          </BlogContentBlock>
        </BlogContentSection>


        <BlogContentSection heading="Final Thoughts" heading-id="">
          <p>A good design brief is the backbone of any successful design project guide on a process and alignment.
            Following these five steps will help you write briefs that set up your team for creative freedom and
            top-notch delivery. Be it with an in-house or external team, clearly setting what the objectives are, who
            the audience is, brand identity, deliverables, and budget gives you 5-star results.</p>


          <p>Further, design process enhancement can be done through brief-building software. It offers efficient
            collaboration and tracking facilities for any design process. Choose the tools that best fit your
            organization's needs and project requirements to ensure exceptional design outcomes always.</p>
        </BlogContentSection>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

  <RecentBlogs :recent-blogs-index="[5, 6, 7]" />
</template>
