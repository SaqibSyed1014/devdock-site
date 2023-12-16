<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import AppButton from "@/core/components/AppButton.vue";
import { useGlobalStore } from '@/stores/global'
import servicesData from "@/core/constants/services.json";

const store = useGlobalStore()

const servicesList = servicesData.vertices.services.map(service => service.title)
const industriesList = [
  { text: "HVAC", value: "" },
  { text: "Customer Service", value: "" },
  { text: "EdTech", value: "" },
  { text: "Health Care", value: "" },
  { text: "Marketing", value: "" },
  { text: "Real estate", value: "" },
  { text: "Security and Surveillance", value: "" },
  { text: "Travel and hospitality", value: "" },
  { text: "Blockchain", value: "" },
]

const selectedIndustry = ref(null)
const selectedService = ref(null)
</script>

<template>
  <aside
      id="mc_embed_signup"
      class="contact-form-sidebar bg-water fixed right-0 top-0 h-screen w-full sm:w-[600px] text-primary overflow-auto z-40 pt-12 pb-24 px-5 md:p-12"
      :class="[store.isFormOpen ? 'expanded':'collapsed']"
  >
    <div class="flex justify-between items-start">
      <div class="flex items-center gap-4">
        <span class="icon-envelope-doodle text-4xl font-medium"></span>
        <h3 class="text-2xl">Contact Us</h3>
      </div>
      <button @click="() => store.toggleContactForm(false)">
        <span class="i-ph-x-light w-8 h-8"></span>
      </button>
    </div>

    <div class="text-lg text-center mx-auto pt-6 pb-5">
      <p>We appreciate your interest in DevDock.</p>
        <p>
          Please fill the form so we can get you the right help and support.
        </p>
    </div>

    <form
        action="https://tech.us21.list-manage.com/subscribe/post?u=6e15aa2d9095358c3c08fee4a&amp;id=c4268fe1cb&amp;f_id=0008e7e6f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        class="grid grid-cols-2 md:gap-x-2.5 gap-y-6 mb-6 validate"
    >
      <div class="col-span-2 md:col-span-1">
        <label>How can we help you*</label>
        <Listbox v-model="selectedService" v-slot="{ open }"  name="SERVICES" id="mce-SERVICES">
          <div class="relative">
            <ListboxButton
                class="select-list relative cursor-pointer"
            >
              <span>{{ selectedService ?? 'Please Select One' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <span
                    class="i-carbon-chevron-down w-5 h-5 text-primary transition duration-200"
                    :class="[open ? 'rotate-180':'rotate-0']"
                />
              </span>
            </ListboxButton>
            <transition
                leave-active-class="transition duration-200 ease-in-out"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
              <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 z-10 text-base shadow-lg focus:outline-none sm:text-sm"
              >
                <ListboxOption
                    v-slot="{ active }"
                    v-for="option in servicesList"
                    :key="option"
                    :value="option"
                    as="template"
                >
                  <li :class="[ active ? 'bg-water' : '', 'cursor-pointer text-primary select-none py-1 px-3.5' ]">
                    {{ option }}
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="col-span-2 md:col-span-1">
        <label>Select your Industry*</label>
        <Listbox v-model="selectedIndustry" v-slot="{ open }" name="INDUSERIES" id="mce-INDUSERIES">
          <div class="relative">
            <ListboxButton
                class="select-list relative cursor-pointer"
            >
              <span>{{ selectedIndustry ?? 'Please Select One' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <span
                    class="i-carbon-chevron-down w-5 h-5 text-primary transition duration-200"
                    :class="[open ? 'rotate-180':'rotate-0']"
                />
              </span>
            </ListboxButton>
            <transition
                leave-active-class="transition duration-200 ease-in-out"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
              <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 z-10 text-base shadow-lg focus:outline-none sm:text-sm"
              >
                <ListboxOption
                    v-slot="{ active }"
                    v-for="option in industriesList"
                    :key="option.value"
                    :value="option.text"
                    as="template"
                >
                  <li :class="[ active ? 'bg-water' : '', 'cursor-pointer text-primary select-none py-1 px-3.5' ]">{{ option.text }}</li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="col-span-2 md:col-span-1">
        <label>Full Name*</label>
        <input type="text" placeholder="Full Name" name="USERNAME" id="mce-USERNAME" class="required text" required />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label>Phone*</label>
        <input type="text" placeholder="Phone" id="mce-PHONE" name="PHONE" class="REQ_CSS"  />
      </div>
      <div class="col-span-2">
        <label>Email*</label>
        <input type="text" placeholder="Email" id="mce-EMAIL" name="EMAIL" class="required email" required />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label>Country*</label>
        <input type="text" placeholder="Country" id="mce-WEBSITE" name="WEBSITE" class="url" />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label>Company/Organization*</label>
        <input type="text" placeholder="Company/Organization" name="COMPANY" id="mce-COMPANY" class=" text" />
      </div>
      <div class="col-span-2 md:col-span-2">
        <label>Message</label>
        <textarea rows="5" placeholder="Full Name" id="mce-MESSAGE" name="MESSAGE" class=" text" />
      </div>
      <div class="col-span-2 md:col-span-2">
        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display: none;"></div>
          <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
        <div aria-hidden="true" style="position: absolute; left: -5000px;">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_6e15aa2d9095358c3c08fee4a_c4268fe1cb" tabindex="-1" value="">
        </div>

        <input
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="site-button bg-primary text-white w-full cursor-pointer inline-block rounded py-2.5 xss:py-3 sm:py-3.5 px-3 xss:px-4 md:px-[22px] lg:px-7 2xl:px-8 text-xs xss:text-sm 2xl:text-lg font-medium leading-normal"
            value="Submit"
        >
      </div>
    </form>
  </aside>
</template>

<style scoped lang="scss">
.contact-form-sidebar{
  &.expanded{
    transform: translateX(0);
    transition: transform .4s cubic-bezier(.55,.055,.675,.19);
  }
  &.collapsed{
    transform: translateX(100%);
    transition: transform .8s cubic-bezier(.19,1,.22,1);
  }
}
label{
  display: block;
  padding-bottom: 5px;
  font-weight: 400;
  font-family: theme('fontFamily.vermena'), sans-serif;
}
input[type="text"], input[type="email"], textarea, select, .select-list{
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ADB7C3;
  outline: none;
  box-shadow: none;
  font-size: 16px;
  background: white;
  text-align: left;
  padding: theme('spacing.[3]') theme('spacing.[3.5]');
  &::placeholder{
    color: #ADB7C3;
  }
  &:focus{
    box-shadow: inset 0 0 0 1px theme('colors.pink');
    border: 1px solid theme('colors.pink');
  }
}
</style>