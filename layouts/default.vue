<template>
  <div class="layout-container">
    <header>
      <nav>
        <!-- Your navigation content -->
      </nav>
      <div>header</div>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <div>footer</div>
      <!-- Your footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
// You can add your layout logic here
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
