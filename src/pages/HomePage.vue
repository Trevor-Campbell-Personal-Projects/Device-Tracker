<template>
  <MainHeader class="relative pt-6 pb-16 sm:pb-24 lg:pb-32"></MainHeader>

  <LandingSectionHero class="pb-32"></LandingSectionHero>

  <LandingSectionHowItWorks class="py-28"></LandingSectionHowItWorks>

  <LandingSectionWhatIsGrant class="py-28"></LandingSectionWhatIsGrant>

  <LandingSectionWhoApply class="py-28"></LandingSectionWhoApply>

  <ApplyCTASection class="py-28"></ApplyCTASection>

  <LandingSectionFAQ class="py-28"></LandingSectionFAQ>

  <MainFooter class="pt-32"></MainFooter>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'

import MainHeader from '@/components/MainHeader.vue'
import LandingSectionHero from '@/components/LandingSectionHero.vue'
import LandingSectionHowItWorks from '@/components/LandingSectionHowItWorks.vue'
import LandingSectionWhoApply from '@/components/LandingSectionWhoApply.vue'
import ApplyCTASection from '@/components/ApplyCTASection.vue'
import LandingSectionFAQ from '@/components/LandingSectionFAQ.vue'
import MainFooter from '@/components/MainFooter.vue'

import { defineComponent } from 'vue'
import LandingSectionWhatIsGrant from '@/components/LandingSectionWhatIsGrant.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    LandingSectionHowItWorks,
    LandingSectionWhoApply,
    LandingSectionFAQ,
    ApplyCTASection,
    MainHeader,
    MainFooter,
    LandingSectionHero,
    LandingSectionWhatIsGrant,
  },
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
        {
          name: 'og:title',
          content: 'Moonlight Grant',
        },
        {
          name: 'og:description',
          content: 'Get up to $1,000 to support your Moonlight Gig',
        },
        {
          name: 'og:image',
          content: '/images/page-images/moonlight-social-image.png',
        },
        {
          name: 'twitter:title',
          content: 'Moonlight Grant',
        },
        {
          name: 'twitter:description',
          content: 'Get up to $1,000 to support your Moonlight Gig',
        },
        {
          name: 'twitter:image',
          content: '/images/page-images/moonlight-social-image.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    })
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
