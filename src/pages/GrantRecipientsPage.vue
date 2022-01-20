<template>
  <Head>
    <meta property="og:title" content="Moonlight Grant | Our Shooting Stars (Head)" />
    <meta property="og:description" content="Our previous grant recipients" />
    <meta property="og:image" content="/images/page-images/moonlight-social-image.png" />
  </Head>
  <div class="relative">
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <MainHeader></MainHeader>
    </div>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'

export default defineComponent({
  name: 'GrantRecipientsPage',
  components: {
    MainHeader,
  },

  setup() {
    useHead({
      title: 'Moonlight Grant | Our Shooting Stars',
      meta: [
        {
          name: 'description',
          content: 'Our Shooting Stars',
        },
        {
          name: 'image',
          content: '/images/page-images/moonlight-social-image.png',
        },
        {
          name: 'twitter:title',
          content: 'Moonlight Grant',
        },
        {
          name: 'twitter:description',
          content: 'Our Shooting Stars',
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
