<template>
  <div>
    <LayoutDefault></LayoutDefault>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    LayoutDefault
},
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
