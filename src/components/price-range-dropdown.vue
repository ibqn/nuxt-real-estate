<script lang="ts" setup>
import { Dropdown, DropdownContent, DropdownItem } from "@/components/dropdown"
import { useQuery } from "@tanstack/vue-query"
import { ChevronUp, Wallet } from "lucide-vue-next"
import { cn } from "@/utils/class-names"
import { getProperties } from "~/apis/property"

const defaultPrice = "Price range (any)"
const selectedPriceRange = ref<string>(defaultPrice)

const { data, suspense } = useQuery({
  queryKey: ["properties"],
  queryFn: getProperties,
})

const properties = computed(() => [defaultPrice, ...(data.value ?? [])])
await suspense()
</script>

<template>
  <Dropdown class="dropdown">
    <template #toggler="slotProps">
      <button class="dropdown-btn w-full text-left">
        <Wallet class="dropdown-icon-primary" />

        <div>
          <div class="text-[15px] font-medium leading-tight">
            {{ selectedPriceRange }}
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
        v-for="(property, index) in properties"
        :key="index"
        class="dropdown-item"
      >
        {{ property }}
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
