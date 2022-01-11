<template>

  <MainHeader class="relative pt-6 pb-16 sm:pb-24 lg:pb-32"></MainHeader>

  <LandingSectionIntro class="pb-24"></LandingSectionIntro>
  
  <LandingSectionStats class="py-24"></LandingSectionStats>
  
  <AboutUsTeamSection class="py-24"></AboutUsTeamSection>
  
  <DonateCTASection class="py-24"></DonateCTASection>
  
  <MainFooter class="pt-32"></MainFooter>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingSectionIntro from "@/components/LandingSectionIntro.vue";
import LandingSectionStats from "@/components/LandingSectionStats.vue";
import DonateCTASection from "@/components/DonateCTASection.vue";
import AboutUsTeamSection from "@/components/AboutUsTeamSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default defineComponent({
  name: 'AboutUsPage',
  components: {
    LandingSectionIntro,
    LandingSectionStats,
    DonateCTASection,
    AboutUsTeamSection,
    MainHeader,
    MainFooter,
  }
})

</script>

<style>
/* None, since using Tailwindcss */
</style>