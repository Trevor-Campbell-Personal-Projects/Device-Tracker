<template>
  <div class="min-w-full min-h-screen bg-gradient-to-t from-black via-slate-900 to-slate-800 overflow-hidden">
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  components: {},

  setup() {
    useHead({
      title: 'Moonlight Grant',
      meta: [
        {
          name: 'description',
          content: 'Get up to $1,000 to support your Moonlight Gig',
        },
        {
          name: 'image',
          content: '/images/page-images/moonlight-social-image.png',
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
