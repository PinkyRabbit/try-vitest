<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b">
      <UContainer>
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <ULink to="/" class="font-bold">My App</ULink>
          </div>

          <nav>
            <UButtonGroup>
              <UButton to="/" variant="ghost">Home</UButton>
              <UButton to="/about" variant="ghost">About</UButton>
              <UButton to="/contact" variant="ghost">Contact</UButton>
            </UButtonGroup>
          </nav>
        </div>
      </UContainer>
    </header>

    <main class="flex-1">
      <UContainer class="py-8">
        <slot />
      </UContainer>
    </main>

    <footer class="border-t p-4">
      <UContainer>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-500">
            © {{ new Date().getFullYear() }} My App. All rights reserved.
          </div>
          <div class="flex gap-4">
            <UButton
              v-for="link in footerLinks"
              :key="link.label"
              :to="link.to"
              variant="ghost"
              size="sm"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const footerLinks = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Contact', to: '/contact' }
]
</script>

