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

const store = useGlobalStore()

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
const selected = ref(null)
</script>

<template>
  <aside
      class="contact-form-sidebar bg-water fixed right-0 top-0 h-screen w-full sm:w-[600px] text-primary overflow-auto z-40 p-12"
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
      <p>
        We appreciate your interest in DevDock.
      </p>
        <p class="">
          Please fill the form so we can get you the right help and support.
        </p>
    </div>

    <form class="grid grid-cols-2 gap-x-2.5 gap-y-6 mb-6">
      <div class="col-span-1">
        <label>How can we help you*</label>
        <Listbox v-model="selected" v-slot="{ open }">
          <div class="relative">
            <ListboxButton
                class="select-list relative cursor-pointer"
            >
              <span>{{ selected ?? 'Please Select One' }}</span>
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
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm"
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
      <div class="col-span-1">
        <label>Select your Industry*</label>
        <Listbox v-model="selectedIndustry" v-slot="{ open }">
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
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm"
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
      <div class="col-span-1">
        <label>Full Name*</label>
        <input type="text" placeholder="Full Name" />
      </div>
      <div class="col-span-1">
        <label>Phone*</label>
        <input type="text" placeholder="Phone" />
      </div>
      <div class="col-span-2">
        <label>Email*</label>
        <input type="text" placeholder="Email" />
      </div>
      <div class="col-span-1">
        <label>Country*</label>
        <input type="text" placeholder="Country" />
      </div>
      <div class="col-span-1">
        <label>Company/Organization*</label>
        <input type="text" placeholder="Company/Organization" />
      </div>
      <div class="col-span-2">
        <label>Message</label>
        <textarea rows="5" placeholder="Full Name" />
      </div>
    </form>
    <AppButton block>Submit</AppButton>
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
input, textarea, select, .select-list{
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