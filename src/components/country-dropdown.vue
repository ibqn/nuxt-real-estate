<script lang="ts" setup>
import { Dropdown, DropdownContent, DropdownItem } from "@/components/dropdown"
import { useQuery } from "@tanstack/vue-query"
import { getCountries } from "@/apis/country"
import { ChevronUp, MapPin } from "lucide-vue-next"
import { cn } from "@/utils/class-names"
import { useSearchStore } from "@/stores/search"

const store = useSearchStore()

const { data, suspense } = useQuery({
  queryKey: ["countries"],
  queryFn: getCountries,
})

const countries = computed(() => [store.defaultLocation, ...(data.value ?? [])])
await suspense()
</script>

<template>
  <Dropdown class="dropdown">
    <template #toggler="slotProps">
      <button class="dropdown-btn w-full text-left">
        <MapPin class="dropdown-icon-primary" />

        <div>
          <div class="text-[15px] font-medium leading-tight">
            {{ store.location }}
          </div>
          <div class="text-[13px]">Select your place</div>
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
        @click="store.setLocation(country)"
        v-for="(country, index) in countries"
        :key="index"
        class="dropdown-item"
      >
        {{ country }}
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
