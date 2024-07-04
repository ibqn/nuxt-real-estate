<script lang="ts" setup>
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="bg-black py-8 text-center text-white">
    <div class="container mx-auto">
      Copyright &copy; {{ currentYear }}. All right reserved.
    </div>
  </footer>
</template>
