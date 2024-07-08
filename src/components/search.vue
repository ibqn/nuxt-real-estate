<script lang="ts" setup>
import { Search } from "lucide-vue-next"
import CountryDropdown from "@/components/country-dropdown.vue"
import PropertyDropdown from "@/components/property-dropdown.vue"
import PriceRangeDropdown from "@/components/price-range-dropdown.vue"
import { cn } from "@/utils/class-names"
import { useSearchStore } from "@/stores/search"
import qs from "query-string"
import { useQueryClient } from "@tanstack/vue-query"

const queryClient = useQueryClient()

const store = useSearchStore()

const updateSearch = () => {
  let queryParams = {
    location:
      store.location === store.defaultLocation ? undefined : store.location,
    property:
      store.property === store.defaultProperty ? undefined : store.property,
    start: store.priceRange.start,
    end: store.priceRange.end,
  }

  store.setSearchQuery(qs.stringify(queryParams))
  console.log("Search query", store.searchQuery)

  queryClient.invalidateQueries({ queryKey: ["houses"] })
}
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
      @click="updateSearch"
      class="flex h-16 w-full items-center justify-center rounded-lg bg-violet-700 text-lg text-white transition hover:bg-violet-800 lg:max-w-[162px]"
    >
      <Search />
    </button>
  </div>
</template>
