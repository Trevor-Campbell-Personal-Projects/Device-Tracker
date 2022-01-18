<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <button class="group inline-flex items-center px-5 py-3 border font-medium rounded-md bg-gradient-to-tr from-slate-400 to-slate-100 text-slate-900 bg-gray-600 shadow-lg shadow-slate-400/50 hover:bg-gray-700 hover:from-yellow-400 hover:to-yellow-100 hover:shadow-yellow-400/50 selection:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200" @click="open = true">
    Donate to Moonlight Fund
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 stroke-2 group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M13.4556 6.85504C14.9314 5.50111 16.8613 4.74994 18.864 4.74994L19.2501 4.74994V5.13607C19.2501 7.1388 18.4989 9.0687 17.145 10.5444L10.9948 17.2478L6.7522 13.0052L13.4556 6.85504Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M7.25 16.75L4.75 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M9.25 18.75L8.75 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M5.25 14.75L4.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M13 19.25L14.24 14L11 17.25L13 19.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M6.75 13L10 9.75L4.75 10.75L6.75 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-slate-600 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl shadow-black/50 transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-8">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-slate-600 rounded-md text-slate-100 hover:bg-slate-500 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200" @click="open = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon class="h-6 w-6 text-yellow-700" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle as="h3" class="text-xl leading-6 font-laila font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">
                  Sorry, we're not accepting donations yet!
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-slate-300">
                    We're working on building our donation center and will have it available soon! Please check back in a bit when our donation system is live!
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-8 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 font-semibold text-slate-900 bg-gradient-to-tr from-slate-400 to-slate-100 shadow-md shadow-slate-400/50 hover:from-yellow-400 hover:to-yellow-100 hover:shadow-yellow-400/50 sm:ml-3 sm:w-auto sm:text-sm focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200" @click="open = false">
                Go Back
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon, XIcon } from '@heroicons/vue/outline'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DonationPopup',
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>