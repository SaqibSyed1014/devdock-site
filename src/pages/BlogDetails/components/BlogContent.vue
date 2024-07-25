<script setup lang="ts">
const shareLinks = [
  {
    icon: "i-mdi-facebook",
    link: "https://www.facebook.com/devdock.team"
  },
  {
    icon: "i-mdi-twitter",
    link: ""
  },
  {
    icon: "i-mdi-instagram",
    link: " https://www.instagram.com/devdock.tech/"
  },
  {
    icon: "i-mdi-linkedin",
    link: "https://www.linkedin.com/company/devdock"
  }
]

function scrollToContent(id :string) {
  const element = document.getElementById(id)
  element.scrollIntoView({
    behavior: "smooth"
  })
}
</script>

<template>
  <section class="blog-detail-page">
    <div class="container">
        <div class="blog-detail">
          <div class="blog-content-index ml-20 bg-sky rounded-[10px] p-[29px] mb-6">
            <div class="flex justify-between mb-5">
              <h4 class="text-2xl">Table of Content</h4>
            </div>

            <p class="indexed-link" @click="scrollToContent('sectionOne')">Embracing Tomorrow: A Guide to the Latest Tech Trends</p>
            <ol class="ml-8">
              <li class="indexed-link" @click="scrollToContent('sectionTwo')">1. Artificial Intelligence (AI) Revolution</li>
              <li class="indexed-link" @click="scrollToContent('sectionThree')">2. Internet of Things (IoT) Connectivity</li>
            </ol>
            <p class="indexed-link" @click="scrollToContent('sectionFour')">Conclusion</p>
          </div>
          <div class="flex gap-8">
            <div class="share-links flex flex-col gap-3">
              <p class="pb-2 font-semibold text-lg">Share:</p>

              <template v-for="social in shareLinks">
                <a
                    :href="social.link"
                    target="_blank"
                    class="flex justify-center items-center w-10 h-10 border border-primary/50 rounded cursor-pointer group hover:bg-primary transition"
                >
                <span
                    class="text-xl xl:text-2xl text-primary group-hover:text-white transition"
                    :class="[`${social.icon}`]"
                />
                </a>
              </template>

              <div
                  class="flex justify-center items-center w-10 h-10 border border-primary/50 rounded cursor-pointer group hover:bg-primary transition">
                <span
                    class="text-xl xl:text-2xl text-primary i-mdi-link-variant group-hover:text-white transition"></span>
              </div>
            </div>

            <div>
              <div class="blog-content">
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
              </div>

              <hr class="border border-[#F1F1F1] w-full my-11">

              <div class="blog-tags">
                <div class="flex items-center gap-3 text-lg">
                  <p class="font-semibold">Tags:</p>
                  <div class="flex gap-2">
                    <div class="bg-[#F1F1F1] rounded-[20px] px-5 py-1">
                      <span>Product Design</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[20px] px-5 py-1">
                      <span>UX Audit</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[20px] px-5 py-1">
                      <span>Redesign</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped lang="scss">

</style>
