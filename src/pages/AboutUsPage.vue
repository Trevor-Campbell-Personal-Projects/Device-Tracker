<template>

  <MainHeader class="relative pt-6 pb-16 sm:pb-24 lg:pb-32"></MainHeader>

  <AboutUsSectionIntro class="pb-28"></AboutUsSectionIntro>
  
  <LandingSectionStats class="py-28"></LandingSectionStats>

  <AboutUsSectionWhy class="py-28"></AboutUsSectionWhy>
  
  <AboutUsTeamSection class="py-28"></AboutUsTeamSection>
  
  <DonateCTASection class="py-28"></DonateCTASection>
  
  <MainFooter class="pt-32"></MainFooter>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutUsSectionIntro from "@/components/AboutUsSectionIntro.vue";
import LandingSectionStats from "@/components/LandingSectionStats.vue";
import DonateCTASection from "@/components/DonateCTASection.vue";
import AboutUsTeamSection from "@/components/AboutUsTeamSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import AboutUsSectionWhy from "@/components/AboutUsSectionWhy.vue";

export default defineComponent({
  name: 'AboutUsPage',
  components: {
    AboutUsSectionIntro,
    LandingSectionStats,
    DonateCTASection,
    AboutUsTeamSection,
    MainHeader,
    MainFooter,
    AboutUsSectionWhy
}
})

</script>

<style>
/* None, since using Tailwindcss */
</style>