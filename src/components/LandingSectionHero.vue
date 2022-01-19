<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
      >
        <div>
          <a
            href="https://tripetto.app/run/K8OSCFZU4C"
            class="inline-flex items-center text-slate-100 bg-slate-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-white shadow-inner shadow-black/50 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200"
          >
            <span
              class="px-3 py-0.5 text-slate-900 text-xs font-bold leading-5 uppercase tracking-wide bg-gradient-to-tr from-yellow-400 to-yellow-100 bg-yellow-200 rounded-full"
              >Apply Now!</span
            >
            <span class="ml-4 text-sm">January 2022<span class="hidden sm:inline"> applications open</span></span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="ml-2 w-5 h-5 text-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <h1
            class="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:font-bold lg:text-5xl xl:text-6xl"
          >
            <span
              class="md:block -mt-1.5 pt-1.5 md:-mb-4 pb-1.5 mr-3 md:mr-0 font-laila text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100"
              >Get up to $1,000</span
            >
            <span
              class="md:block -mt-1.5 pt-1.5 md:-mb-1.5 pb-1.5 text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white"
              >to support your Moonlight Gig</span
            >
          </h1>
          <p
            class="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl selection:bg-yellow-200/20 selection:text-yellow-300"
          >
            Are you a Creator, Hacker, Artist, Problem Solver, Musician, Photographer, Designer, Craftsman, Filmmaker,
            or Chef? Working on something cool or learning new skills?
          </p>
          <p
            class="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl selection:bg-yellow-200/20 selection:text-yellow-300"
          >
            Get a no-strings-attached grant to take your skills to the next level!
          </p>
          <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Sponsored by</p>
          <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
            <div class="flex flex-wrap items-start justify-between">
              <div class="flex justify-center px-1">
                <CoinbaseLogo class="h-4 sm:h-8 fill-slate-400"></CoinbaseLogo>
              </div>
              <div class="flex justify-center px-1">
                <NetflixLogo class="h-4 sm:h-8 fill-slate-400"></NetflixLogo>
              </div>
              <div class="flex justify-center px-1">
                <OnlyfansLogo class="h-4 sm:h-8 fill-slate-400"></OnlyfansLogo>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Block -->
      <div
        class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
      >
        <div class="relative mx-auto w-full rounded-lg shadow-xl shadow-black/30 lg:max-w-md">
          <figure class="relative block w-full">
            <img
              class="rounded-lg contrast-125 brightness-110"
              src="https://images.pexels.com/photos/6614829/pexels-photo-6614829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              width="1310"
              height="873"
            />
          </figure>
          <!-- <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200">
            <span class="sr-only">Watch our video to learn more</span>
            <img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
              <svg class="h-20 w-20 text-yellow-200" fill="currentColor" viewBox="0 0 84 84">
                <circle class="fill-gray-800" opacity="0.9" cx="42" cy="42" r="42" fill="" />
                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
              </svg>
            </div>
          </button> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import CoinbaseLogo from '@/assets/logos/CoinbaseLogo.vue'
import NetflixLogo from '@/assets/logos/NetflixLogo.vue'
import OnlyfansLogo from '@/assets/logos/OnlyfansLogo.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionHero',
  components: {
    CoinbaseLogo,
    NetflixLogo,
    OnlyfansLogo,
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
