<template>
  <div class="bg-gray-100 min-w-full min-h-screen">
    <Header></Header>
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'App',

  components: {
    Header,
  },

  setup() {
    useHead({
      title: 'Default title',
      meta: [
        {
          name: 'description',
          content: 'This is a DEFAULT description',
        },
        {
          name: 'other-stuff',
          content: 'This is some OTHER stuff',
        },
      ],
    })
  },
})
</script>

<style>
/* General antialiasing across entire app */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
