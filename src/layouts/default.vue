<script setup lang="ts">
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
</script>

<template>
  <div class="mx-auto max-w-[1440px] bg-white">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
