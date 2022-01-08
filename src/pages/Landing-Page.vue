<template>
  <!-- <div class="bg-white"> -->
  <div class="relative bg-gradient-to-t from-black via-slate-900 to-slate-800 overflow-hidden">
    
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <Popover>
        <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#" class="block">
                <MoonlightLogo class="absolute h-10 w-auto sm:h-12 text-yellow-400"></MoonlightLogo>
                <p class="ml-14 leading-[2] sm:leading-[2.5] font-bold font-laila text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Moonlight Grant</p>
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:space-x-8">
              <a v-for="item in navigation" :key="item.id" class="relative text-lg font-medium text-slate-100 hover:text-white px-4 py-2 rounded-md transition-all ease-in-out delay-100 duration-300 hover:bg-slate-900 hover:shadow-inner hover:shadow-black/50">
                <router-link :to="{path:item.router}">{{item.names}}</router-link>
              </a>
            </div>
          </div>
          <div class="hidden md:block text-right">
            <span class="inline-flex rounded-md shadow-lg shadow-slate-900">
              <a href="#" class="inline-flex items-center px-4 py-2 border font-medium rounded-md bg-gradient-to-tr from-slate-400 to-slate-100 text-slate-900 bg-gray-600 hover:bg-gray-700 hover:from-slate-100 hover:to-slate-400">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </a>
            </span>
          </div>
        </nav>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close main menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="item in navigation" :key="item.id" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  <router-link :to="{path:item.router}">{{item.names}}</router-link>
                </a>
              </div>
              <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                Log in
              </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <a href="#" class="inline-flex items-center text-slate-100 bg-slate-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-white shadow-inner shadow-black/50">
                <span class="px-3 py-0.5 text-slate-900 text-xs font-bold leading-5 uppercase tracking-wide bg-gradient-to-tr from-yellow-400 to-yellow-100 bg-yellow-200 rounded-full">Apply Now!</span>
                <span class="ml-4 text-sm">January 2022 applications open</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <h1 class="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:font-bold lg:text-5xl xl:text-6xl">
                <span class="md:block -mb-1 pb-1 font-laila text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Get up to $1,000</span>
                <span class="md:block -mb-1 pb-1 text-transparent bg-clip-text bg-gradient-to-t from-slate-400 lg:from-slate-300 via-slate-50 to-white">to support your Moonlight Gig</span>
              </h1>
              <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl selection:bg-yellow-200/20 selection:text-yellow-300">
                Are you a Creator, Hacker, Artist, Builder, Musician, Photographer, Designer, Craftsman, Filmmaker, or Chef? Working on something cool or learning new skills?
              </p>
              <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl selection:bg-yellow-200/20 selection:text-yellow-300">
                Get a no-strings-attached grant to take your skills to the next level!
              </p>
              <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Sponsored by</p>
              <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <div class="flex flex-wrap items-start justify-between">
                  <div class="flex justify-center px-1">
                    <CoinbaseLogo class="h-4 sm:h-8 fill-gray-400"></CoinbaseLogo>
                  </div>
                  <div class="flex justify-center px-1">
                    <NetflixLogo class="h-4 sm:h-8 fill-gray-400"></NetflixLogo>
                  </div>
                  <div class="flex justify-center px-1">
                    <OnlyfansLogo class="h-4 sm:h-8 fill-gray-400"></OnlyfansLogo>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Video Block -->
          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">
                <span class="sr-only">Watch our video to learn more</span>
                <img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
                <div class="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                  <svg class="h-20 w-20 text-yellow-200" fill="currentColor" viewBox="0 0 84 84">
                    <circle class="fill-gray-800" opacity="0.9" cx="42" cy="42" r="42" fill="" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import MoonlightLogo from '@/assets/logos/MoonlightLogo.vue'
import CoinbaseLogo from '@/assets/logos/CoinbaseLogo.vue'
import NetflixLogo from '@/assets/logos/NetflixLogo.vue'
import OnlyfansLogo from '@/assets/logos/OnlyfansLogo.vue'

const navigation = [
  {names: 'Info Page', router: '/info', id: 1},
  {names: 'Resources Page', router: '/resources', id: 2},
  {names: 'Landing Page', router: '/landing', id: 3},
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    MoonlightLogo,
    CoinbaseLogo,
    NetflixLogo,
    OnlyfansLogo
},
  setup() {
    return {
      navigation,
    }
  },
}
</script>