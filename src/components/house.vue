<script setup lang="ts">
import { type House } from "@/types"
import { Bath, BedDouble, Scaling } from "lucide-vue-next"

interface Props {
  index: number
  house: House
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="mx-auto w-full max-w-[352px] cursor-pointer rounded-lg rounded-tl-[90px] bg-white p-5 shadow-1 transition hover:shadow-2xl"
  >
    <img :src="props.house.image" :alt="props.house.name" class="mb-8" />
    <div class="mb-4 flex gap-x-2 text-sm">
      <div class="rounded-full bg-green-500 px-3 text-white">
        {{ props.house.type }}
      </div>
      <div class="rounded-full bg-violet-500 px-3 text-white">
        {{ props.house.country }}
      </div>
    </div>

    <div class="max-w-[260px] text-lg font-semibold">
      {{ props.house.address }}
    </div>

    <div class="my-4 flex gap-x-4">
      <div class="flex items-center gap-1 text-gray-600">
        <div class="text-[20px]">
          <BedDouble />
        </div>
        <div>{{ props.house.bedrooms }}</div>
      </div>

      <div class="flex items-center gap-1 text-gray-600">
        <div class="text-[20px]">
          <Bath />
        </div>
        <div>{{ props.house.bathrooms }}</div>
      </div>

      <div class="flex items-center gap-1 text-gray-600">
        <div class="text-[20px]">
          <Scaling />
        </div>
        <div>{{ props.house.surface }}</div>
      </div>
    </div>

    <Price class="mb-4" :price="props.house.price" />
  </div>
</template>
