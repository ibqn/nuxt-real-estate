<script setup lang="ts">
const active = ref(false)
const toggle = () => (active.value = !active.value)
provide("active", active)

import { onClickOutside } from "@vueuse/core"

const target = ref(null)

onClickOutside(target, (event) => {
  console.log(event)
  active.value = false
})
</script>

<template>
  <div @click="toggle" ref="target">
    <slot name="toggler" :active>
      <button>Toggle</button>
    </slot>
    <slot></slot>
  </div>
</template>
