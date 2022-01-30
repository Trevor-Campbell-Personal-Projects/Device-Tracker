<template>
  <section class="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
    <div class="absolute inset-0 overflow-hidden">
      <img
        class="object-cover object-bottom w-full h-full transform rotate-180 opacity-10"
        src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
        alt=""
      />
    </div>

    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <GenericLogo class="w-auto h-8 mx-auto fill-blue-500" />
      </div>

      <div class="relative max-w-md mx-auto mt-10 lg:max-w-xl">
        <div class="absolute inset-x-1.5 top-8 -inset-y-4">
          <div class="w-full h-full mx-auto rounded-3xl bg-conic-gradient blur-xl filter"></div>
        </div>

        <div class="relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl">
          <div class="px-6 py-7 sm:px-12 sm:py-10">
            <div class="text-center">
              <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Create Account</h1>
            </div>

            <form action="#" method="POST" class="mt-8 bg-gray-100 p-4 rounded-lg" @submit.prevent="handleSubmit">
              <div class="space-y-4">
                <div>
                  <label for="" class="text-base font-medium text-gray-900"> Name </label>
                  <div class="mt-2.5">
                    <input
                      id=""
                      v-model="form.name"
                      type="name"
                      name=""
                      placeholder="Your Name"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label for="" class="text-base font-medium text-gray-900"> Email </label>
                  <div class="mt-2.5">
                    <input
                      id=""
                      v-model="form.email"
                      type="email"
                      name=""
                      placeholder="Email address"
                      class="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                    />
                  </div>
                </div>

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
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import GenericLogo from '@/svg-icons/GenericLogo.vue'

export default defineComponent({
  name: 'RegisterPage',
  components: { GenericLogo },
  setup() {
    // Use necessary composables
    const router: any = useRouter()
    const { register } = useAuthUser()

    // Form reactive ref to keep up with the form data
    const form = ref({
      name: '',
      email: '',
      password: '',
      meta: '',
    })

    // function to hand the form submit
    const handleSubmit = async () => {
      try {
        // use the register method from the AuthUser composable
        await register(form.value)

        // and redirect to a EmailConfirmation page the will instruct
        // the user to confirm their email address
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email },
        })
      } catch (error: any) {
        alert(error.message)
      }
    }

    return {
      form,
      handleSubmit,
    }
  },
})
</script>

<style>
/* None, since using Tailwindcss */
</style>
