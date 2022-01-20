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
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'
import AboutUsSectionIntro from '@/components/AboutUsSectionIntro.vue'
import LandingSectionStats from '@/components/LandingSectionStats.vue'
import DonateCTASection from '@/components/DonateCTASection.vue'
import AboutUsTeamSection from '@/components/AboutUsTeamSection.vue'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import AboutUsSectionWhy from '@/components/AboutUsSectionWhy.vue'

export default defineComponent({
  name: 'AboutUsPage',
  components: {
    AboutUsSectionIntro,
    LandingSectionStats,
    DonateCTASection,
    AboutUsTeamSection,
    MainHeader,
    MainFooter,
    AboutUsSectionWhy,
  },
  setup() {
    useHead({
      title: `Moonlight Grant | About Us`,
      meta: [
        {
          name: `description`,
          content: `Our mission is to uncover and amplify the greatest artists and change-makers of our time from places others overlook.`,
        },
        {
          name: `image`,
          content: `/images/page-images/moonlight-social-image.png`,
        },
        {
          name: `og:title`,
          content: `Moonlight Grant | About Us`,
        },
        {
          name: `og:description`,
          content: `Our mission is to uncover and amplify the greatest artists and change-makers of our time from places others overlook.`,
        },
        {
          name: `og:image`,
          content: `/images/page-images/moonlight-social-image.png`,
        },
        {
          name: `twitter:title`,
          content: `Moonlight Grant | About Us`,
        },
        {
          name: `twitter:description`,
          content: `Our mission is to uncover and amplify the greatest artists and change-makers of our time from places others overlook.`,
        },
        {
          name: `twitter:image`,
          content: `/images/page-images/moonlight-social-image.png`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ],
    })
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
