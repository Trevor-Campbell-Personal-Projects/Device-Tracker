<template>
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
          <a v-for="item in navigation" :key="item.id" class="relative">
            <router-link class="text-lg font-medium text-slate-100 hover:text-white px-4 py-2 rounded-md transition-all ease-in-out delay-100 duration-300 hover:bg-slate-900 hover:shadow-inner hover:shadow-black/50" active-class="relative text-lg font-medium text-white px-4 py-2 rounded-md transition-all ease-in-out delay-100 duration-300 bg-slate-900 shadow-inner shadow-black/50 ring-4 ring-yellow-200/50" :to="{path:item.router}">{{item.names}}</router-link>
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
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import MoonlightLogo from '@/assets/logos/MoonlightLogo.vue'

import { defineComponent } from 'vue'

const navigation = [
  {names: 'Home', router: '/', id: 1},
  {names: 'About Us Page', router: '/about-us', id: 2},
  {names: 'Our Shooting Stars', router: '/our-shooting-stars', id: 3},
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