<template>
  <div class="flex bg-gray-500 text-white justify-between">
    <ul class="flex gap-5 p-5">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
    </ul>
    <ul v-if="isLoggedIn()" class="flex gap-5 bg-gray-700 p-5">
      <li><router-link :to="{ name: 'logout' }" @click="handleLogout()">Logout</router-link></li>
    </ul>
    <ul v-else class="flex gap-5 bg-gray-700 p-5">
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li><router-link :to="{ name: 'register' }">Register</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'

export default defineComponent({
  name: 'AppHeader',
  components: {},
  setup() {
    // Use necessary composables
    const router = useRouter()
    const { isLoggedIn, logout } = useAuthUser()

    // function to handle Logout
    const handleLogout = async () => {
      try {
        // use the register method from the AuthUser composable
        await logout()

        // and redirect to a EmailConfirmation page the will instruct
        // the user to confirm their email address
        router.push({
          name: 'logout',
        })
      } catch (error: any) {
        alert(error.message)
      }
    }

    return {
      isLoggedIn,
      handleLogout,
    }
  },
})
</script>
