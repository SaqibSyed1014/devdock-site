<script setup>
import pageData from "@/core/constants/services.json"

const serviceVertices = pageData.vertices
</script>

<template>
  <section class="section-container bg-primary">
    <div class="grid grid-cols-1">
      <div class="flex items-center justify-center py-24 md:py-36">
        <div class="w-full lg:w-3/4 2xl:w-2/3 px-2 md:px-3 lg:px-8 text-center">
          <h2 class="mb-5 md:mb-8 text-3xl md:text-[50px] md:leading-[58px] font-bold text-secondary">
            {{ serviceVertices.heading }}
          </h2>
          <p class="text-base sm:text-lg md:text-2xl text-white">
            {{ serviceVertices.text }}
          </p>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <template v-for="(data, index) in serviceVertices.services" :key="index">
            <div
                class="group border-[1px] border-b-0 border-x-0 sm:border-b-[1px] sm:border-x-[1px] border-white border-opacity-50 cursor-pointer transition hover:bg-secondary"
            >
              <div class="flex items-center h-96 sm:h-[400px] xl:h-[450px] px-3 sm:px-7 md:px-[21px]">
                <div class="text-white flex-1">
                  <span class="text-5xl md:text-[53px] transition group-hover:text-primary opacity-2">
                    {{ `${index + 1}.` }}
                  </span>
                  <div class="pt-20">
                    <span
                        class="text-secondary text-4xl group-hover:text-primary group-hover:hidden"
                         :class="[`${data.icon}`]"
                    />
                    <div class="flex gap-3 xl:gap-8 justify-between items-center pt-5">
                      <h3 class="text-2xl sm:text-2xl md:text-2xl xl:text-3xl font-bold sm:pr-5 text-white transition group-hover:text-primary">
                        {{ data.title }}
                      </h3>
                      <span class="i-mdi-arrow-right w-9 h-9 md:w-12 md:h-12 transition group-hover:hidden"/>
                    </div>
                    <p class="text-primary text-[14.5px] 2xl:text-lg leading-6 md:leading-7 2xl:leading-9 hidden transition group-hover:!line-clamp-4 pt-5 pb-2">
                      {{ data.desc }}
                    </p>

                    <span class="text-primary text-sm 2xl:text-lg hidden transition group-hover:block">
                      <router-link
                          :to="{ name: 'DevDockServiceDetails', params: { title: data.id } }"
                          class="flex justify-end items-center gap-3 hover:underline"
                      >
                        Read More <span class="i-gg-arrow-right w-5 h-5" />
                      </router-link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
