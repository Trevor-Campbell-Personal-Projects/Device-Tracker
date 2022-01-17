<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:mx-20 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="">
      <h2 class="text-sm text-yellow-400 font-semibold tracking-wide uppercase lg:text-base">Calling All Creatives</h2>
      <p class="mt-2 -mb-1.5 pb-1.5 text-3xl sm:text-4xl font-laila font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Who Should Apply?</p>
      <p class="mt-4 text-lg text-slate-100">Our goal is to support as many creatives as possible. If you're up to something rad, you should apply!</p>
      <p class="mt-4 text-lg text-slate-100"><strong class="text-yellow-200 underline underline-offset-4 decoration-2 decoration-wavy decoration-yellow-200">Open to all countries!</strong></p>
    </div>
    <div class="mt-12 lg:mt-0 lg:col-span-2">
      <dl class="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:grid-flow-col sm:gap-x-6 sm:gap-y-6 lg:gap-x-8 text-slate-100">
        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Artists</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Hackers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Content Creators</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Musicians</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">3D Designers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.25 19.25H13.75"></path>
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Writers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Problem Solvers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Photographers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Designers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Philosophers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path d="M13.4556 6.85504C14.9314 5.50111 16.8613 4.74994 18.864 4.74994L19.2501 4.74994V5.13607C19.2501 7.1388 18.4989 9.0687 17.145 10.5444L10.9948 17.2478L6.7522 13.0052L13.4556 6.85504Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7.25 16.75L4.75 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9.25 18.75L8.75 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M5.25 14.75L4.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 19.25L14.24 14L11 17.25L13 19.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.75 13L10 9.75L4.75 10.75L6.75 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Rocket Scientists</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path d="M10.75 13.25V10.25H8.25V11.25C8.25 11.8023 7.80228 12.25 7.25 12.25H5.75C5.19772 12.25 4.75 11.8023 4.75 11.25V5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H7.25C7.80228 4.75 8.25 5.19772 8.25 5.75V6.75H15C15 6.75 19.25 6.75 19.25 11.25C19.25 11.25 17 10.25 14.25 10.25V13.25M10.75 13.25H14.25M10.75 13.25V19.25M14.25 13.25V19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Craftsmen</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.75 5V19"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.25 5V19"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 8.75H7.5"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 8.75H19"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12H19"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 15.25H7.5"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 15.25H19"></path>
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Filmmakers</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path d="M12 14.25C16.0041 14.25 19.25 11.2018 19.25 7.75H4.75C4.75 11.2018 7.99594 14.25 12 14.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 4.75V5.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 4.75V5.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M15 4.75V5.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.75 14L17.25 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.75 17.75H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M9 14L7.75 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.25 18C8.25 18.6904 7.69036 19.25 7 19.25C6.30964 19.25 5.75 18.6904 5.75 18C5.75 17.3096 6.30964 16.75 7 16.75C7.69036 16.75 8.25 17.3096 8.25 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium">Chefs</p>
          </dt>
        </div>

        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg class="absolute h-6 w-6 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <p class="ml-9 text-lg leading-6 font-laila font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-100">Creatives of all kinds!</p>
          </dt>
        </div>

      </dl>
    </div>
  </div>
</template>

<script lang="ts">

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingSectionWhoApply',
  components: {
  },
  setup() {
    return {
      features,
    }
  },
})

</script>