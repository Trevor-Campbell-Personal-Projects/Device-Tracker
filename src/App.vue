<template>
  <body class="app min-w-full min-h-screen bg-gray-100 overflow-hidden">
    <router-view />
  </body>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    useHead({
      title: 'Device Tracker',
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
