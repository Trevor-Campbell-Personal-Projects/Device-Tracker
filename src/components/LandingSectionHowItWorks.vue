<template>
  <div class="max-w-xl mx-auto lg:max-w-7xl px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="font-laila mt-2 pb-1.5 block text-4xl text-center leading-8 font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100 sm:text-5xl">How Does It Work?</h2>
    </div>
    <dl class="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div class="group p-4 hover:bg-black/40 hover:shadow-inner hover:shadow-black rounded-lg transition-all ease-in-out duration-300">
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-slate-300 shadow-inner shadow-black/50 group-hover:shadow-none group-hover:bg-none group-hover:text-yellow-400 group-hover:bg-yellow-200/10 transition-all ease-in-out duration-300">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p class="mt-5 pb-0.5 text-2xl sm:text-2xl font-laila font-semibold leading-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300">Apply for a Grant</p>
        </dt>
        <dd class="mt-2 text-base text-gray-400 group-hover:text-slate-100 transition-all ease-in-out duration-300">
          Tell us a bit about what you're working on, and how you would use your Moonlight Grant to push the boundaries of your creativity. Then submit your application for our team to review!
        </dd>
      </div>

      <div class="group p-4 hover:bg-black/40 hover:shadow-inner hover:shadow-black rounded-lg transition-all ease-in-out duration-300">
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-slate-300 shadow-inner shadow-black/50 group-hover:shadow-none group-hover:bg-none group-hover:text-yellow-400 group-hover:bg-yellow-200/10 transition-all ease-in-out duration-300">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path d="M17.25 6.75H9.375C7.92525 6.75 6.75 7.92525 6.75 9.375C6.75 10.8247 7.92525 12 9.375 12H14.625C16.0747 12 17.25 13.1753 17.25 14.625C17.25 16.0747 16.0747 17.25 14.625 17.25H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.75 19.25V4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="mt-5 pb-0.5 text-2xl sm:text-2xl font-laila font-semibold leading-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300">Receive your Grant Funds</p>
        </dt>
        <dd class="mt-2 text-base text-gray-400 group-hover:text-slate-100 transition-all ease-in-out duration-300">
          If you're selected for a Moonlight Grant, our team will contact you to congratulate you! We'll make sure you can receive your grant funds in a way that is fast, easy, and safe for you to use.
        </dd>
      </div>

      <div class="group p-4 hover:bg-black/40 hover:shadow-inner hover:shadow-black rounded-lg transition-all ease-in-out duration-300">
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-slate-300 shadow-inner shadow-black/50 group-hover:shadow-none group-hover:bg-none group-hover:text-yellow-400 group-hover:bg-yellow-200/10 transition-all ease-in-out duration-300">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <p class="mt-5 pb-0.5 text-2xl sm:text-2xl font-laila font-semibold leading-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300">Create Something Amazing!</p>
        </dt>
        <dd class="mt-2 text-base text-gray-400 group-hover:text-slate-100 transition-all ease-in-out duration-300">
          Now that you're able to get the supplies, tools, and courses you need to take things to the next level, it's time to get creative! We can't wait to see what you'll create!
        </dd>
      </div>
      
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionHowItWorks',
})
</script>

<style>
/* None, since using Tailwindcss */
</style>