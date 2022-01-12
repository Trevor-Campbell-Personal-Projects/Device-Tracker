<template>

  <MainHeader class="relative pt-6 pb-16 sm:pb-24 lg:pb-32"></MainHeader>

  <LandingSectionHero class="pb-24"></LandingSectionHero>

  <LandingSectionHowItWorks class="py-24"></LandingSectionHowItWorks>

  <LandingSectionWhatIsGrant class="py-24"></LandingSectionWhatIsGrant>

  <LandingSectionWhoApply class="py-24"></LandingSectionWhoApply>

  <ApplyCTASection class="py-24"></ApplyCTASection>

  <LandingSectionFAQ class="py-24"></LandingSectionFAQ>

  <MainFooter class="pt-32"></MainFooter>

</template>

<script lang="ts">
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
    LandingSectionWhatIsGrant
},
})
</script>

<style>
/* None, since using Tailwindcss */
</style>