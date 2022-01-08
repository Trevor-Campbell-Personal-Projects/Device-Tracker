<template>
  <h1>The HOME template -{{ count }}-</h1>
  <img alt="Vue logo" src="@/assets/logo.png" @click="addTwo" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'
import { store } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const addTwo = () => store.commit('add', 2)
    const count = computed(() => store.state.count)

    return {
      addTwo,
      count,
    }
  },
})
</script>

<style>
/*None, since using TailwindCSS */
</style>
