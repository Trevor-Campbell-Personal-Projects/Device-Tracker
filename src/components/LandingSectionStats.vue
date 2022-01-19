<template>
  <div class="max-w-7xl mx-auto px-8 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-sm text-yellow-400 font-semibold tracking-wide uppercase lg:text-base">
        We're just getting started
      </h2>
      <h2
        class="text-3xl sm:text-4xl mt-2 pb-0.5 font-bold font-laila text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100"
      >
        Lots of Grants Given
      </h2>
      <p class="mt-3 text-xl text-slate-100 sm:mt-4">
        Our goal is to deliver more than
        <span class="text-yellow-200 underline underline-offset-4 decoration-2 decoration-wavy decoration-yellow-200"
          >$1,000,000</span
        >
        in Moonlight Grants to our Shooting Stars by the end of 2022.
      </p>
    </div>

    <dl class="mt-10 text-center space-y-6 sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0">
      <div
        class="group flex flex-col bg-black/20 shadow-inner shadow-black rounded-lg py-6 hover:bg-black/40 transition-all ease-in-out duration-300"
      >
        <dt
          class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300 group-hover:text-white transition-all ease-in-out duration-300"
        >
          Grant Recipients
        </dt>
        <dd
          class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300"
        >
          500
        </dd>
      </div>

      <div
        class="group flex flex-col bg-black/20 shadow-inner shadow-black rounded-lg py-6 hover:bg-black/40 transition-all ease-in-out duration-300"
      >
        <dt
          class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300 group-hover:text-white transition-all ease-in-out duration-300"
        >
          In Grants Given
        </dt>
        <dd
          class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300"
        >
          $200k
        </dd>
      </div>

      <div
        class="group flex flex-col bg-black/20 shadow-inner shadow-black rounded-lg py-6 hover:bg-black/40 transition-all ease-in-out duration-300"
      >
        <dt
          class="order-2 mt-2 text-lg leading-6 font-medium text-slate-300 group-hover:text-white transition-all ease-in-out duration-300"
        >
          Applications Received
        </dt>
        <dd
          class="order-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-400 via-slate-50 to-white group-hover:from-yellow-400 group-hover:to-yellow-100 transition-all ease-in-out duration-300"
        >
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
