<script setup lang="ts">
const active = inject<boolean>("active")
</script>

<template>
  <div v-if="active">
    <slot />
  </div>
</template>
