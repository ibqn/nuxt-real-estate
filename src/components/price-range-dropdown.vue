<script lang="ts" setup>
import { Dropdown, DropdownContent, DropdownItem } from "@/components/dropdown"
import { useQuery } from "@tanstack/vue-query"
import { ChevronUp, Wallet } from "lucide-vue-next"
import { cn } from "@/utils/class-names"
import { useSearchStore } from "@/stores/search"
import { getPriceRanges } from "@/apis/price-range"

const store = useSearchStore()

const { data, suspense } = useQuery({
  queryKey: ["price-ranges"],
  queryFn: getPriceRanges,
})

const priceRanges = computed(() => [
  store.defaultPriceRange,
  ...(data.value ?? []),
])
await suspense()
</script>

<template>
  <Dropdown class="dropdown lg:max-w-[320px]">
    <template #toggler="slotProps">
      <button class="dropdown-btn w-full text-left">
        <Wallet class="dropdown-icon-primary" />

        <div class="mr-2">
          <div class="text-[15px] font-medium leading-tight">
            {{ store.priceRange.label }}
          </div>
          <div class="text-[13px]">Select your price range</div>
        </div>

        <ChevronUp
          :class="
            cn(
              'dropdown-icon-secondary transition',
              slotProps.active ? 'rotate-0' : 'rotate-180'
            )
          "
        />
      </button>
    </template>

    <DropdownContent class="dropdown-content">
      <DropdownItem
        @click="store.setPriceRange(priceRange)"
        v-for="(priceRange, index) in priceRanges"
        :key="index"
        class="dropdown-item"
      >
        {{ priceRange.label }}
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
