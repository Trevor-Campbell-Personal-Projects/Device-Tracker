<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-sm text-yellow-400 font-semibold tracking-wide uppercase lg:text-base">We're just getting started</h2>
      <h2 class="text-3xl sm:text-4xl mt-2 pb-0.5 font-bold font-laila text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">
        Lots of Grants Given
      </h2>
      <p class="mt-3 text-xl text-slate-100 sm:mt-4">
        Our goal is to deliver more than <span class="text-yellow-200 underline underline-offset-4 decoration-2 decoration-wavy decoration-yellow-200">$1,000,000</span> in Moonlight Grants to our Shooting Stars by the end of 2022.
      </p>
    </div>

    <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
      
      <div class="flex flex-col bg-slate-900 shadow-inner shadow-black rounded-lg py-6">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300">
          Grant Recipients
        </dt>
        <dd class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white">
          500
        </dd>
      </div>

      <div class="flex flex-col mt-10 sm:mt-0 bg-slate-900 shadow-inner shadow-black rounded-lg py-6">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300">
          In Grants Given
        </dt>
        <dd class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white">
          $200k
        </dd>
      </div>

      <div class="flex flex-col mt-10 sm:mt-0 bg-slate-900 shadow-inner shadow-black rounded-lg py-6">
        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300">
          Applications Received
        </dt>
        <dd class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white">
          6,000
        </dd>
      </div>

    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionStats',
})
</script>

<style>
/*  None, since using Tailwindcss */
</style>