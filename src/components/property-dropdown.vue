<script lang="ts" setup>
import { Dropdown, DropdownContent, DropdownItem } from "@/components/dropdown"
import { useQuery } from "@tanstack/vue-query"
import { ChevronUp, House } from "lucide-vue-next"
import { cn } from "@/utils/class-names"
import { getProperties } from "@/apis/property"
import { useSearchStore } from "@/stores/search"

const store = useSearchStore()

const { data, suspense } = useQuery({
  queryKey: ["properties"],
  queryFn: getProperties,
})

const properties = computed(() => [
  store.defaultProperty,
  ...(data.value ?? []),
])
await suspense()
</script>

<template>
  <Dropdown class="dropdown">
    <template #toggler="slotProps">
      <button class="dropdown-btn w-full text-left">
        <House class="dropdown-icon-primary" />

        <div>
          <div class="text-[15px] font-medium leading-tight">
            {{ store.property }}
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
        @click="store.setProperty(property)"
        v-for="(property, index) in properties"
        :key="index"
        class="dropdown-item"
      >
        {{ property }}
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
</template>
