<template>
  <form class="max-w-lg m-auto" @submit.prevent="handlePasswordReset()">
    <h1 class="text-3xl mb-5">Forgot Password?</h1>
    <label>Email <input v-model="email" type="email" /></label>
    <button>Send Reset Email</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import { ref } from 'vue'

export default defineComponent({
  name: 'ForgotPasswordPage',
  components: {},
  setup() {
    // use necessary composables
    const { sendPasswordResetEmail } = useAuthUser()

    // keep up with email
    const email = ref('')

    // function to call on submit of the form
    // triggers sending the reset email to the user
    const handlePasswordReset = async () => {
      await sendPasswordResetEmail(email.value)
      alert(`Password reset email sent to: ${email.value}`)
    }

    return {
      email,
      handlePasswordReset,
    }
  },
})
</script>
