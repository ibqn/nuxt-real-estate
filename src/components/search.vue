<script lang="ts" setup>
import { Search } from "lucide-vue-next"
import CountryDropdown from "@/components/country-dropdown.vue"
import PropertyDropdown from "@/components/property-dropdown.vue"
import PriceRangeDropdown from "@/components/price-range-dropdown.vue"
import { cn } from "@/utils/class-names"
</script>

<template>
  <div
    :class="
      cn(
        'relative mx-auto flex max-w-[1170px] flex-col justify-between gap-4 rounded-lg',
        'bg-white px-[30px] py-6 lg:-top-4 lg:flex-row lg:gap-3 lg:bg-transparent lg:shadow-1 lg:backdrop-blur'
      )
    "
  >
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <button
      class="flex h-16 w-full items-center justify-center rounded-lg bg-violet-700 text-lg text-white transition hover:bg-violet-800 lg:max-w-[162px]"
    >
      <Search />
    </button>
  </div>
</template>
