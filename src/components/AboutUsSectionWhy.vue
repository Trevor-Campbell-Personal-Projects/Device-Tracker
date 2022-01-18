<template>
  <div class="relative px-8 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span class="font-laila mt-2 pb-1.5 block text-3xl sm:text-4xl text-center leading-8 font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Why Are We Doing This?</span>
      </h1>
    </div>
    <div class="mt-8 prose prose-gray prose-lg text-gray-100 mx-auto">
      <p>We're living in the midst of a renaissance unlike any other time in history. Despite this, access to many tools and technologies is not evenly distributed to everyone. Still, great divides exist between the global north and south. Between the haves and have nots.</p>
      <figure class="w-3/4 mx-auto">
        <img class="rounded-lg" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" width="1310" height="873">
        <figcaption>After sunset, the earth lights up with the activity of moonlighters.</figcaption>
      </figure>
      <p>The Moonlight grant was created to help up-and-coming artists, change-makers, and innovators clear the barriers to creativity and innovation. With the help of our grant funds, we aim to make it easier for undiscovered talent to get access to the tools, supplies, and education they need to change the world forever.</p>
      <p>We draw inspirations from the famous Medici family of Florence, who were the economic and social engine that powered the Italian Renaissance in the 15th century. Michaelangelo, Da Vinci, Boticelli, and many more of the great artists, scholars, and scientists we know from this period were beneficiaries of the Medici family's initiatives.</p>
      <figure class="w-3/4 mx-auto">
        <img class="rounded-lg" src="https://images.unsplash.com/photo-1585252406583-b474fb5f5ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" alt="" width="1310" height="873">
        <figcaption>The creators are out there – can we reach them and flourish?</figcaption>
      </figure>
      <p>Some of the greatest artists, change-makers, and innovators who have ever walked this earth are out there today. <strong class="text-yellow-200 underline underline-offset-4 decoration-2 decoration-wavy decoration-yellow-200">We just need to find them.</strong></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUsSectionWhy',
})
</script>

<style>
/* None, since using Tailwindcss */
</style>