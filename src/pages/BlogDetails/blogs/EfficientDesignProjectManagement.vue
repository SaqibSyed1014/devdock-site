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

let selectedBlog = ref<Blog>(pageData.blogs[4]);
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
          <BlogContentBlock
              sub-heading="What is Design Project Management?"
              sub-heading-id=""
          >
            <p>Design project management is the planning, execution, and overseeing of creative projects toward
              finalization at the right time, within budget, and to the satisfaction of the client. It involves the
              merging of traditional project management techniques with an understanding of design processes to
              achieve successful outcomes.</p>
          </BlogContentBlock>
        </BlogContentSection>

        <BlogContentSection
            heading="8 Steps in Setting up an Effective Design Project Management Process"
            heading-id="managementSteps"
        >

          <BlogContentBlock sub-heading="Define Project Objectives and Scope" sub-heading-id="stepOne">
            <p><b>Set Expectations:</b> Define what is required from the client. That is, the goals in terms of audience
              and expected results.</p>

            <p>
              <b>Key Questions to Ask:</b>
              What does the client need?<br>
              Who is the audience?<br>
              Which results are expected?
            </p>

            <p><b>Alignment:</b> Clarify these requirements with all stakeholders.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Team Formation And Empowerment" sub-heading-id="stepTwo">
            <p><b>Roles Involved:</b> A number of professionals, for example project managers, designers, art directors,
              UX designers, copywriters, among others.</p>

            <p><b>Define Roles:</b> Once the team is made, define the role of each of the team members. This will make
              them accountable for their work.</p>

            <p><b>Alignment:</b> Clarify these requirements with all stakeholders.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Select Appropriate Tools for Project Management" sub-heading-id="stepThree">
            <p><b>Select the Right Tools:</b> A number of professionals, for example project managers, designers, art
              directors, UX designers, copywriters, among others.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Develop a Road Map for the Project" sub-heading-id="stepFour">
            <p><b>Develop a Road Map:</b> Objectives, scope, period of time, resource utilization, and budget.</p>

            <p><b>Facilitate Communication:</b> A well-thought plan initiates an effective communication and
              collaboration process, by which it helps to diminish the possibility of scope creeping and missed deadlines.</p>

            <img src="/img/blogs/blog-five/brainstorming.webp" alt="Brainstorming">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Develop a Creative Brief" sub-heading-id="stepFive">
            <p><b>Elaborate Brief:</b> Include project objectives, target audience, brand guidelines and other mandatory details.</p>

            <p><b>Touchpoint:</b> Use the brief as a reference throughout the project and as evidence in case of scope changes.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Enable Communication and Collaboration" sub-heading-id="stepSix">
            <p><b>Communication Channels:</b> For keeping updates and feedback, make sure you have these in place.</p>

            <p><b>Team Meetings:</b> Schedule regular feedback loops to ensure there is transparency and alignment.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Enable Communication and Collaboration" sub-heading-id="stepSeven">
            <p><b>Structured Methodologies:</b> Come up with workflows around ideation, creation, and iteration.
              This has to be aimed at making sure that tasks are structured in an appropriate manner and roles are
              clearly defined for whom.</p>

            <p><b>Consistency:</b> Across the designs, you need to maintain consistency to allow efficient use of resources.
              Review, Deliver, and Learn</p>

            <p><b>Quality Levels:</b> Have quality control at several different levels and come up with a reviewing
              workflow.</p>

            <p><b>Post-Project Reviewing:</b> It is also vital to evaluate a project after completion to identify areas
              where you will want to enhance the management process.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="What Sets Design Project Management Apart" sub-heading-id="stepEight">
            <p><b>Creative and Aesthetic:</b> Emphasis on presentations and creative steps.<br>
              <b>Collaboration with designers:</b> Interaction with designers and creative crews<br>
              <b>Iterative Process:</b> Implementation of changes and improvements per feedback<br>
              <b>Subjective:</b> Becomes the laborer in the realm of subjectivity on the matter of design success<br>
              <b>Visual Communication:</b> Highly skilled at handling visual materials and prototypes</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Top 5 Design Project Management Software" sub-heading-id="topDesignManagementSoftware">
            <p id="trello"><b>Trello</b><br> Most Ideal for Task and Project Management.</p>

            <p>
              <b>Visual Workflow:</b> Project/ task management via boards, lists, and cards.<br>
              <b>Customization:</b> It's an adaptable system with lists, labels, and due dates.<br>
              <b>Collaboration:</b> It includes comments, file attachments, and integrations.<br>
              <b>Easy-to-Use:</b> Straightforward interface.
            </p>

            <img src="/img/blogs/blog-six/trello.webp" alt="Trello">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="" sub-heading-id="">
            <p id="fileStage"><b>Filestage</b><br> Best for Review and Approval</p>

            <p>
              <b>Due Dates:</b> You can set deadlines for review rounds.<br>
              <b>In-Context Comments:</b> Direct feedback on designs.<br>
              <b>Visual Annotations:</b> Cues to leave better feedback.<br>
              <b>Version Control:</b> Follow changes together with the corresponding feedback.
            </p>

            <img src="/img/blogs/blog-six/filestage.webp" alt="Filestage">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="" sub-heading-id="">
            <p id="monday"><b>Monday.com</b><br> Best for Creative Collaboration and Resource Management</p>

            <p>
              <b>Customizable Workflows:</b> It provides the facility to customize boards and views for design projects.<br>
              <b>Task Management:</b> Keeps important tasks on track with the ability to coordinate deadlines and dependencies.<br>
              <b>File Management:</b> Referencing design files and keeping these organized for easy retrieval.<br>
              <b>Collaboration:</b> Real-time communication and automation of support.
            </p>

            <img src="/img/blogs/blog-six/monday.webp" alt="Monday.com">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="" sub-heading-id="">
            <p id="adobeCreativeCloud"><b>Adobe Creative Cloud with Adobe Project Rush</b> Best for Creative Collaboration and Resource Management</p>

            <p>
              <b>Collaboration:</b> Share and Sync Assets with Creative Cloud Libraries<br>
              <b>Asset Management:</b> Organization of design files as well as Version Control<br>
              <b>Works with Adobe Apps:</b> Adobe applications like Photoshop and XD have easy integration and seamless working with this app<br>
              <b>Cloud Storage:</b> Real-time updating and Versioning up to the minute.<br>
              <b>Basecamp:</b> Best for Team Communication and Collaboration<br>
              <b>Project Organization:</b> A single place for all work with info pertaining to your project<br>
              <b>To-Do Lists:</b> Individual tasks, assign them to humans, and track the progress<br>
              <b>File Sharing:</b> Upload and Organize Design Files<br>
              <b>Message Boards:</b> A place for ongoing discussions and the flow of brainstormed ideas
            </p>

            <img src="/img/blogs/blog-six/adobe-creative-cloud.webp" alt="dobe Creative Cloud with Adobe Project Rush">
          </BlogContentBlock>




          <BlogContentBlock sub-heading="Conclusion" sub-heading-id="conclusion">
            <p>A good design project management process should be organized, collaborative, and well-equipped. Follow
              these steps and use the right software—they are going to bring efficiency and make it possible that your
              design project will satisfy the client's expectation. Choose the most appropriate tools for your team's
              needs, and keep the communication clear all the way through the project.</p>
          </BlogContentBlock>
        </BlogContentSection>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

  <RecentBlogs :recent-blogs-index="[1, 3, 7]" />
</template>
