<template>
  <div class="relative px-8 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="hidden absolute top-0 inset-x-0 h-1/2 lg:block" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto bg-slate-900 lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
          <div class="absolute inset-x-0 h-1/2 bg-black/75 lg:hidden" aria-hidden="true"></div>
          <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
              <img
                class="object-cover object-center rounded-3xl shadow-xl shadow-black"
                src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          class="relative bg-slate-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center lg:shadow-inner lg:shadow-black"
        >
          <div
            class="relative max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
          >
            <h2 class="text-sm text-yellow-400/50 font-semibold tracking-wide uppercase lg:text-base">
              Our Shooting Stars Need Your Support
            </h2>
            <p
              class="mt-2 text-3xl sm:text-4xl font-laila font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100"
            >
              Want to Donate?
            </p>
            <p class="mt-4 text-lg text-slate-100 selection:bg-yellow-200/20 selection:text-yellow-300">
              Help us spread our reach and support more creatives and innovators by donating to the Moonlight Fund.
              Donations can be made anonymously or publicly.
            </p>
            <div class="mt-6 rounded-md bg-yellow-100/10 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <!-- Heroicon name: solid/information-circle -->
                  <svg
                    class="h-5 w-5 text-yellow-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-yellow-200">
                    We accept donations only in the form of cryptocurrency at this time.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-16 flex flex-wrap justify-center sm:justify-start">
              <DonationPopup></DonationPopup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DonationPopup from './DonationPopup.vue'

export default defineComponent({
  name: 'DonateCTASection',
  components: {
    DonationPopup,
  },
})
</script>

<style>
/*  None, since using Tailwindcss */
</style>
