<template>
  <main
    class="absolute h-screen w-screen bg-cover bg-top sm:bg-top"
    style="
      background-image: url('https://images.pexels.com/photos/7919120/pexels-photo-7919120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    "
  >
    <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
      <p class="text-sm font-semibold text-yellow-400 uppercase tracking-wide">404 error</p>
      <h1
        class="font-laila mt-2 pb-1.5 block text-4xl text-center leading-8 font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100 sm:text-5xl"
      >
        Uh oh! I think you’re lost.
      </h1>
      <p class="mt-2 text-lg font-medium text-black text-opacity-50">
        It looks like the page you’re looking for doesn't exist.
      </p>
      <div class="mt-6">
        <span class="inline-flex rounded-md shadow-lg shadow-slate-900">
          <a
            href="/"
            class="inline-flex items-center px-5 py-3 border font-medium rounded-md bg-gradient-to-tr from-slate-400 to-slate-100 text-slate-900 bg-gray-600 hover:bg-gray-700 hover:from-slate-100 hover:to-slate-400"
          >
            Go to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404Page',
  components: {},
  setup() {
    useHead({
      title: 'Moonlight Grant | 404',
      meta: [
        {
          name: 'description',
          content: "Hmm... Looks like you're lost in space!",
        },
        {
          name: 'image',
          content: '/images/page-images/moonlight-social-image.png',
        },
        {
          name: 'twitter:title',
          content: '404 | Not Found',
        },
        {
          name: 'twitter:description',
          content: "Hmm... Looks like you're lost in space!",
        },
        {
          name: 'twitter:image',
          content: '/images/page-images/moonlight-social-image.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    })
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
