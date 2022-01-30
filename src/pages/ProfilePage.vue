<template>
  <div v-if="user">
    <!--user_metadata is the key supabase nests all arbitrary meta data under-->
    <div>Hello {{ user.user_metadata.name }}</div>
  </div>
</template>

<script lang="ts">
import useAuthUser from '@/composables/UseAuthUser'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  components: {},
  setup() {
    const { user } = useAuthUser()

    return {
      user,
    }
  },
})
</script>
