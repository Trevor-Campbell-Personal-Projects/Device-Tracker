<template>
  <div v-if="user">
    <!--user_metadata is the key supabase nests all arbitrary meta data under-->
    <div>Hello {{ user.user_metadata.name }}</div>
    <p>Reset your Password Below...</p>
    <form action="#" method="POST" class="mt-8 bg-gray-100 p-4 rounded-lg" @submit.prevent="handlePasswordReset()">
      <div class="space-y-4">
        <div>
          <label for="" class="text-base font-medium text-gray-900"> Password </label>
          <div class="mt-2.5">
            <input
              id=""
              v-model="form.password"
              type="password"
              name=""
              placeholder="Password"
              class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
            />
          </div>
        </div>

        <button
          type="submit"
          class="flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600"
        >
          Change Password
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import useAuthUser from '@/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'PasswordResetPage',
  components: {},
  setup() {
    const router: any = useRouter()
    const { user, update } = useAuthUser()

    // keep up with form data
    const form = ref({
      password: '',
    })

    // call the proper update method from the AuthUser composable
    // on the submit of the form
    const handlePasswordReset = async (password: string) => {
      try {
        password
        await update(form.value)
        router.push({ name: 'home' })
      } catch (error: any) {
        alert(error.message)
      }
    }

    return {
      user,
      form,
      handlePasswordReset,
    }
  },
})
</script>
