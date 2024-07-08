<script lang="ts" setup>
import House from "@/components/house.vue"
import { useQuery } from "@tanstack/vue-query"
import { getHouses } from "@/apis/house"
import { useSearchStore } from "@/stores/search"

const store = useSearchStore()

const { data: houses, suspense } = useQuery({
  queryKey: ["houses"],
  queryFn: () => getHouses(store.searchQuery),
})
await suspense()
</script>

<template>
  <section class="mb-20">
    <div class="container mx-auto">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        <NuxtLink
          v-for="(house, index) in houses"
          :key="house.id"
          :to="`/property/${house.id}`"
        >
          <House :index :house :key="house.id" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
