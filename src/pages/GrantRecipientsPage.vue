<template>
  <div class="relative">
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <MainHeader></MainHeader>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: 'GrantRecipientsPage',
  components: {
    MainHeader
  },
})

</script>

<style>
/* None, since using Tailwindcss */
</style>