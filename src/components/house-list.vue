<script lang="ts" setup>
import House from "@/components/house.vue"
import { useQuery } from "@tanstack/vue-query"
import { getHouses } from "@/apis/house"
import { useSearchStore } from "@/stores/search"

const store = useSearchStore()

const { data: houses, isFetching } = useQuery({
  queryKey: ["houses"],
  queryFn: () => getHouses(store.searchQuery),
})
</script>

<template>
  <section class="mb-20">
    <div class="container mx-auto">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        <HouseBulk v-for="(bulk, index) in 9" v-if="isFetching" />
        <NuxtLink
          v-else-if="houses?.length !== 0"
          v-for="(house, index) in houses"
          :key="house.id"
          :to="`/property/${house.id}`"
        >
          <House :index :house :key="house.id" />
        </NuxtLink>
        <div
          v-else
          class="col-span-full mt-48 text-center text-3xl text-gray-400"
        >
          Sorry, nothing found
        </div>
      </div>
    </div>
  </section>
</template>
