<script setup lang="ts">
import { formatPrice } from "@/utils/price-formatter"
import { cn } from "@/utils/class-names"
import { type HtmlHTMLAttributes } from "vue"

type Props = {
  price: number
}

const props = defineProps<Props & { class?: HtmlHTMLAttributes["class"] }>()

const price = computed(() => formatPrice(props.price))
</script>

<template>
  <span :class="cn('text-lg font-semibold text-violet-600', props.class)">{{
    price
  }}</span>
</template>
