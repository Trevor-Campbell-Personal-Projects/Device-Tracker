<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="rounded-md bg-blue-50 border-2 border-blue-500/50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon
          class="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3 flex-1 text-sm text-blue-700">
        <p>
          This template has been specially configured to work with GitHub
          Codespaces.
        </p>
        <p class="mt-4">
          Namely, Vite's 'hmr' server port has been changed from the default
          'port: 3000' --> 'port: 443' to prevent conflict with Codespace's
          streaming of localhost over the browser.
        </p>
        <p class="mt-4 underline font-medium">
          <a href="#">Learn more about Github Codespaces.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/solid'

export default {
  components: {
    InformationCircleIcon,
  },
}
</script>
