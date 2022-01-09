<template>
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="mt-2 text-3xl sm:text-4xl font-laila font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">How Does It Work?</h2>
    </div>
    <dl class="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-slate-300 shadow-inner shadow-black/50">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p class="mt-5 pb-0.5 text-2xl sm:text-2xl font-laila leading-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-slate-200 to-white">Apply for a Grant</p>
        </dt>
        <dd class="mt-2 text-base text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </dd>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-yellow-200 shadow-inner shadow-black/50">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path d="M17.25 6.75H9.375C7.92525 6.75 6.75 7.92525 6.75 9.375C6.75 10.8247 7.92525 12 9.375 12H14.625C16.0747 12 17.25 13.1753 17.25 14.625C17.25 16.0747 16.0747 17.25 14.625 17.25H6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M11.75 19.25V4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="mt-5 text-2xl leading-6 font-medium font-laila text-yellow-200">Receive your Grant Funds</p>
        </dt>
        <dd class="mt-2 text-base text-gray-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
        </dd>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-slate-900 text-yellow-200 shadow-inner shadow-black/50">
            <!-- Heroicon name: outline/globe-alt -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <p class="mt-5 text-2xl leading-6 font-medium text-yellow-200">Create Something Amazing!</p>
        </dt>
        <dd class="mt-2 text-base text-gray-100">
          Use your Moonlight Grant to create 
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