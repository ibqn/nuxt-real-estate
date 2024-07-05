<script setup lang="ts">
const active = inject<boolean>("active")
</script>

<template>
  <ul v-if="active">
    <slot />
  </ul>
</template>
