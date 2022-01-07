<template>
  <div class="mx-auto pb-20 px-4 sm:px-6 lg:px-8 mt-12">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
        <div class="max-w bg-white overflow-hidden shadow-xl rounded-lg divide-y divide-gray-200">
            <div class="px-4 py-5 sm:px-6">
                <span class="mr-2">📚</span>Resources:
            </div>
            <div class="px-4 py-5 sm:p-6">
                <div>
                  Body
                </div>
                Body
            </div>
            <div class="px-4 py-4 sm:px-6 bg-gray-100">
                Footer
            </div>
        </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Info'
})
</script>

<style>

</style>