<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="mb-12 selection:bg-yellow-200/20 selection:text-yellow-300">
    <div class="max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-3">
          <a
            :href="item.href"
            class="text-base text-gray-500 hover:text-yellow-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200 focus:rounded-sm"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a
          v-for="item in navigation.social"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-black focus:ring-yellow-200 focus:rounded-sm"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6 hover:fill-yellow-200" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">&copy; 2022 Moonlight Grant, All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Apply', href: 'https://tripetto.app/run/K8OSCFZU4C' },
    //{ name: 'Our Shooting Stars', href: '/our-shooting-stars' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
  ],
}

export default defineComponent({
  name: 'MainFooter',
  components: {},
  setup() {
    return {
      navigation,
    }
  },
})
</script>
