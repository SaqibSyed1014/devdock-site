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

let selectedBlog = ref<Blog>(pageData.blogs[2]);
</script>

<template>
  <div class="relative">
    <BlogHeader :title="selectedBlog.title" :sub-title="selectedBlog.subTitle" :blog-image="selectedBlog.image.path"/>

    <BlogContentTemplate>
      <template #table-contents>
        <TableOfContents :table-contents="selectedBlog.tableContentLinks"/>
      </template>

      <template #blog-content>
        <BlogContentSection
            heading=""
            heading-id=""
        >
          <p>Let's put more feeling into this: it will help define in factual terms what web design and web development
            actually are and how they differ but work intertwined with each other to produce the magic of a seamless
            website.</p>

          <BlogContentBlock
              sub-heading="Key Points"
              sub-heading-id=""
          >
            <p><b>Web Design works on:</b><br>
              Looks
              User experience</p>

            <p><b>Web Development works on:</b><br>
              Coding
              Functionality
              Benefits of Web Design
              Engagements increase
              Conversion rates
              Accessibility
              Benefits of Web Development
              Performance
              Scalability
              Security
              Differences</p>

            <em class="text-primary">The focus is different; required skill sets, tools to work with, and
              deliverables.</em>

            <p><b>Similarities:</b> Both are goal-driven, collaborative, and user experience-centered.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="What Is Web Design?" sub-heading-id="">
            <p>Web design is the process of designing visual elements and the UI. It deals with layouts, color schemes,
              typography, and imagery. A good web design reflects making a site visually appealing and
              user-friendly.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Why is Web Design Important?" sub-heading-id="">
            <p><b>First Impressions:</b> Creates an impression at first glance and thus ensures a seamless usability for the
              users across the site.<br>
              <b>Brand Identity:</b> Reinforces brand recognition and builds trust.<br>
              <b>SEO Benefits:</b> Apart from search engine optimization, this enhances the search engine rankings with an
              additional touch of visual appearance.</p>

            <img src="/img/blogs/blog-three/working.webp" alt="People Working">
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Benefits of Good Web Design:" sub-heading-id="">
            <p><b>Increased Engagement:</b>  Visually pleasing sites are visited more and explored for a longer period.<br>
              <b>Increased Conversions:</b> A well-designed website gives a better conversion rate.<br>
              <b>Better Accessibility:</b> It makes sure that all kinds of people will gain access to the site,
              including the disabled ones. It would guarantee that putting resources in good web design is sure to make
              your business stand out, attract customers, and help the business grow.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="What is Web Development?" sub-heading-id="">
            <p>Web development is the process of technically developing and maintaining a website. Much of it involves
              coding front-end interfaces and back-end systems for data management and the functioning of the site.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Why Web Development Matters?" sub-heading-id="">
            <p><b>Functionality:</b> Smooth running of the site, adapting to user needs.<br>
              <b>Performance:</b> Determines speed, responsiveness, and generally how satisfied users are with the site.<br>
              <b>Security:</b> Cyber security of the site and protection of sensitive data.</p>
          </BlogContentBlock>

          <BlogContentBlock sub-heading="Benefits of Web Development:" sub-heading-id="">
            <p><b>Improved Performance:</b> Quick loading time and smooth navigation.<br>
              <b>Scalability:</b> Expandability and growth to suit changing business needs.<br>
              <b>Security:</b> Application of strong measures to help a website be secure from cyber threats.<br>
              <em class="text-primary">Effectively, thus, web development would lead to a strong, scalable, and secure
                website to meet all current and future business needs.</em></p>
          </BlogContentBlock>

          <BlogContentSection
              heading="Web Design vs. Web Development: Key Differences"
              heading-id=""
          >
            <BlogContentBlock sub-heading="Focus:" sub-heading-id="">
              <p><b>Web Design:</b> It deals with the aesthetic aspect and user experience of a website. The aspects
                of concern in this include layouts, color schemes, and typography.</p>

              <p><b>Web Development:</b> It focuses on the technical function of a website. This is tacked down to mean
                making a website work through coding, front-end and back-end.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Required Skills:" sub-heading-id="">
              <p><b>Web Design:</b> This requires graphic design skills, color theory skills, and typography skills. It
                often makes use of tools like Adobe Photoshop and Figma for visuals and prototypes.</p>

              <p><b>Web Development:</b> It requires knowledge of programming languages such as HTML, CSS, JavaScript,
                and server-side languages like Python and Ruby. Developers also employ editors, version control, and
                frameworks.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Tools Used:" sub-heading-id="">
              <p><b>Web Design:</b> Design software like Adobe Photoshop, Illustrator, and Sketch for designing the
                visual
                elements and mockups of the website.</p>

              <p><b>Web Development:</b> Editors like Visual Studio Code, version control systems, development
                frameworks like
                React and Django for building up and maintaining website functionality.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Deliverables:" sub-heading-id="">
              <p>Web Design includes wireframes, mockups, style guides depicting the visual road ahead. Web development
                creates functional elements, front-end and back-end code that brings the design into practice and makes
                it operationally functional. Even design and development have quite a few similarities between them in
                the goal-oriented and collaborative manner:<br>
                Designers test the feasibility and functionality of visual design with the developer. The integration of
                design with technical requirements requires effective communication.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Focused on User Experience:" sub-heading-id="">
              <p>Both roles are involved in the process of enhancing user experience by designing intuitive interfaces
                and
                developing responsive and high-performance sites.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Problem-Solving:" sub-heading-id="">
              <p>Designers and developers solve problems related to aesthetics, functionality, performance, and security
                by coming up with creative solutions to ensure that the website can satisfy its targets.</p>
            </BlogContentBlock>

            <BlogContentBlock sub-heading="Conclusion" sub-heading-id="">
              <p>While web design and web development have two different roles in the running of a website, they are
                interdependent processes. Basically, well-coordinated work between the designer and the developer
                results
                in a site that is seamless both in aesthetic appeal and functionality.<br><br>

                This is statistically where top web design agencies have to master both and therefore provide a holistic
                approach to website creation.<br><br>

                As Hovie Hawk, Owner and Creative Director at Design Hovie Studios, Inc., says,<br>
                <em class="text-primary">"Clear layouts for developers; good communication between designers,
                  developers, and clients
                  throughout."</em><br><br>

                Web design and web development can jointly create an effective online presence by knowing what each role
                does and how they interrelate with one another.</p>
            </BlogContentBlock>
          </BlogContentSection>

        </BlogContentSection>
      </template>

      <template #blog-tags>
        <BlogTags :blog-tags="selectedBlog.tags"/>
      </template>
    </BlogContentTemplate>
  </div>

  <RecentBlogs :recent-blogs-index="[5, 6, 1]" />
</template>
