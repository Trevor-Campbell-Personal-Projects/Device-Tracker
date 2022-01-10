<template>
  <div class="relative bg-gradient-to-t from-black via-slate-900 to-slate-800 overflow-hidden">
    <LandingSectionIntro class="py-12"></LandingSectionIntro>
    <LandingSectionStats class="py-12"></LandingSectionStats>
    <DonateCTASection class="py-12"></DonateCTASection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingSectionIntro from "./LandingSectionIntro.vue";
import LandingSectionStats from "./LandingSectionStats.vue";
import DonateCTASection from "./DonateCTASection.vue";

export default defineComponent({
  name: 'AboutUsPage',
  components: {
    LandingSectionIntro,
    LandingSectionStats,
    DonateCTASection
}
})

</script>

<style>
/* None, since using Tailwindcss */
</style>