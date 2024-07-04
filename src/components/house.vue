<script setup lang="ts">
import { type House } from "@/types"

interface Props {
  index: number
  house: House
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <img :src="props.house.image" alt="" />
    <div>
      <div>{{ props.house.type }}</div>
      <div>{{ props.house.country }}</div>
    </div>
  </div>
</template>
