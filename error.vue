<template>
  <div class="min-h-screen flex items-center justify-center">
    <UContainer class="text-center">
      <UCard class="max-w-2xl mx-auto">
        <div class="space-y-6">
          <!-- Error Icon -->
          <div class="flex justify-center">
            <UIcon
              :name="error.statusCode === 404
                ? 'i-heroicons-face-frown'
                : 'i-heroicons-exclamation-triangle'"
              class="text-6xl text-red-500"
            />
          </div>

          <!-- Error Title -->
          <h1 class="text-3xl font-bold">
            {{ error.statusCode === 404 ? 'Page Not Found' : 'Oops! Something went wrong' }}
          </h1>

          <!-- Error Message -->
          <p class="text-gray-600">
            {{ error.message ||
              (error.statusCode === 404
                ? 'The page you are looking for might have been removed or is temporarily unavailable'
                : 'We apologize for the inconvenience. Please try again later.')
            }}
          </p>

          <!-- Action Buttons -->
          <div class="flex justify-center gap-4 pt-4">
            <UButton
              color="primary"
              @click="handleError"
            >
              Back to Home
            </UButton>

            <UButton
              color="gray"
              variant="soft"
              @click="handleRetry"
            >
              Try Again
            </UButton>
          </div>

          <!-- Error Details (optional, for development) -->
          <div v-if="isDev" class="mt-4">
            <UButton
              color="gray"
              variant="ghost"
              class="w-full mb-2"
              @click="showDetails = !showDetails"
            >
              {{ showDetails ? 'Hide' : 'Show' }} Error Details
              <UIcon
                :name="showDetails ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
                class="ml-2"
              />
            </UButton>

            <div v-if="showDetails" class="transition-all">
              <pre class="text-left text-sm p-4 bg-gray-50 rounded-lg">
                {{ error }}
              </pre>
            </div>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const showDetails = ref(false)
const isDev = computed(() => import.meta.env.DEV)

const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => {
  // Clear error and return to home page
  clearError()
  navigateTo('/')
}

const handleRetry = () => {
  // Refresh the current page
  clearError()
  window.location.reload()
}
</script>
