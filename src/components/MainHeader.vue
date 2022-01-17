<template>
  <Popover>
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 selection:bg-yellow-200/20 selection:text-yellow-300" aria-label="Global">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a class="block">
            <router-link to="/" >
              <MoonlightLogo class="absolute h-10 w-auto sm:h-12 text-yellow-400"></MoonlightLogo>
              <p class="ml-14 leading-[2] sm:leading-[2.5] font-bold font-laila text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Moonlight Grant</p>
            </router-link>
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <PopoverButton class="bg-slate-600 rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-slate-800 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200">
              <span class="sr-only">Open main menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-8">
          <a v-for="item in navigation" :key="item.id" class="relative">
            <router-link class="text-lg font-medium text-slate-100 hover:text-white px-4 py-2 rounded-md transition-all ease-in-out delay-100 duration-300 hover:bg-slate-900 hover:shadow-inner hover:shadow-black/50" active-class="relative text-lg font-medium text-white px-4 py-2 rounded-md transition-all ease-in-out delay-100 duration-300 bg-slate-900 shadow-inner shadow-black/50 ring-4 ring-yellow-200/50" :to="{path:item.router}">{{item.names}}</router-link>
          </a>
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-lg shadow-slate-900">
          <a href="https://tripetto.app/run/K8OSCFZU4C" class="group inline-flex items-center px-4 py-2 border font-medium rounded-md text-slate-900 bg-gradient-to-tr from-slate-400 to-slate-100 shadow-lg shadow-slate-400/50 hover:from-yellow-400 hover:to-yellow-100 hover:shadow-yellow-400/50 selection:text-yellow-700">
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 stroke-2 group-hover:-rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </a>
        </span>
      </div>
    </nav>

    <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md bg-black ring-2 ring-slate-100 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <a router="/">
              <router-link to="/">
                <MoonlightLogo1 class="h-8 w-auto text-yellow-400"></MoonlightLogo1>
              </router-link>
            </a>
            <div class="-mr-2">
              <PopoverButton class="bg-slate-600 rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200">
                <span class="sr-only">Close main menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a v-for="item in navigation" :key="item.id" class="block px-3 py-2 rounded-md text-base font-semibold text-slate-100 hover:text-slate-100 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200">
              <router-link :to="{path:item.router}">{{item.names}}</router-link>
            </a>
          </div>
          <a href="https://tripetto.app/run/K8OSCFZU4C" class="block w-full px-5 py-3 text-center font-semibold text-slate-900 bg-gradient-to-tr from-slate-400 to-slate-100 hover:from-yellow-100 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200 selection:text-yellow-700">
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 w-6 ml-2 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </a>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import MoonlightLogo from '@/assets/logos/MoonlightLogo.vue'
import MoonlightLogo1 from '@/assets/logos/MoonlightLogo.vue'

import { defineComponent } from 'vue'

const navigation = [
  {names: 'Home', router: '/', id: 1},
  {names: 'About Us', router: '/about-us', id: 2},
  //{names: 'Our Shooting Stars', router: '/our-shooting-stars', id: 3},
]

export default defineComponent ({
  name: 'MainHeader',
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    MoonlightLogo,
    MoonlightLogo1
},
  setup() {
    return {
      navigation,
    }
  },
})

</script>

<style>
/* None, since using Tailwindcss */
</style>