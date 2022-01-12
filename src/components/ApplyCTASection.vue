<template>
  <div class="max-w-2xl mx-auto text-center px-8">
    <h2 class="text-sm text-yellow-400 font-semibold tracking-wide uppercase lg:text-base">Ready to create something amazing?</h2>
    <h2 class="text-3xl sm:text-4xl mt-2 pb-0.5 font-bold font-laila text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">
      Submit your application today!
    </h2>
    <a href="#" class="group mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-slate-900 bg-gradient-to-tr from-slate-400 to-slate-100 shadow-lg shadow-slate-400/50 hover:from-yellow-400 hover:to-yellow-100 hover:shadow-yellow-400/50 sm:w-auto">
      Apply Now
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 stroke-2 group-hover:-rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name: 'ApplyCTASection',
  components:{
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>