<template>
  <div class="mx-auto pb-20 px-4 sm:px-6 lg:px-8 mt-12 h-full">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto h-full">
      <div
        class="
          bg-white
          overflow-hidden
          shadow-xl
          rounded-lg
          divide-y divide-gray-200
        "
      >
        <div class="px-4 py-5 sm:px-6 font-medium text-2xl">
          <span class="mr-2">👋</span>Welcome to this Starter Template!
        </div>
        <div class="mb-10 px-4 py-5 sm:p-6 space-y-6">
          <div class="space-y-8">
            <p>
              This template has been built and configured with the following:
            </p>

            <div class="mt-12">
              <h3 class="font-semibold mt-6 mb-4">Frameworks + Languages:</h3>
              <div class="ml-8">
                <ul
                  class="
                    list-disc
                    space-y-2
                    md:space-y-0 md:grid md:grid-cols-3 md:gap-y-2
                  "
                >
                  <li>
                    Vue<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >3.2.16</span
                    >
                  </li>
                  <li>
                    Typescript<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >4.4.3</span
                    >
                  </li>
                  <li>
                    Vite<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >2.6.4</span
                    >
                  </li>
                  <li>
                    TailwindCSS<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >2.2.17</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="font-semibold mt-6 mb-4">Tooling:</h3>
              <div class="ml-8">
                <ul
                  class="
                    list-disc
                    space-y-2
                    md:space-y-0 md:grid md:grid-cols-3 md:gap-y-2
                  "
                >
                  <li>
                    CommitLint<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >13.2.1</span
                    >
                  </li>
                  <li>
                    EsLint<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >8.0.1</span
                    >
                  </li>
                  <li>
                    Husky<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >7.0.4</span
                    >
                  </li>
                  <li>
                    Prettier<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >2.4.1</span
                    >
                  </li>
                  <li>
                    StyleLint<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >13.13.1</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="font-semibold mb-4">Other Add-Ons:</h3>
              <div class="ml-8">
                <ul
                  class="
                    list-disc
                    space-y-2
                    md:space-y-0 md:grid md:grid-cols-3 md:gap-y-2
                  "
                >
                  <li>
                    Vue Router<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >4.0.12</span
                    >
                  </li>
                  <li>
                    VueX<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >4.0.2</span
                    >
                  </li>
                  <li class="col-span-2">
                    TailwindUI<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >(HeadlessUI + HeroIcons)</span
                    >
                  </li>
                  <li class="col-span-3">
                    Tailwind Plugins<span
                      class="
                        rounded-sm
                        text-xs
                        ml-2
                        px-2
                        py-1
                        bg-gray-100
                        text-gray-500
                        font-semibold font-mono
                      "
                      >(typography, forms, line-clamp, aspect-ratio)</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-4 sm:px-6 bg-gray-100">
          <h2 class="font-semibold text-gray-700 text-lg">Notes:</h2>
          <InfoBlock class="mt-4"></InfoBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InfoBlock from '@/components/InfoBlock.vue'

export default defineComponent({
  name: 'Info',
  components: {
    InfoBlock,
  },
})
</script>

<style></style>
