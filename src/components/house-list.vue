<script lang="ts" setup>
import House from "@/components/house.vue"
import { useQuery } from "@tanstack/vue-query"
import { getHouses } from "@/apis/house"

const { data: houses, suspense } = useQuery({
  queryKey: ["test"],
  queryFn: getHouses,
})
await suspense()
</script>

<template>
  <section class="mb-20">
    <div class="container mx-auto">
      <div>
        <NuxtLink
          v-for="(house, index) in houses"
          :key="house.id"
          :to="`/property/${house.id}`"
        >
          <House :index :house :key="house.id" />
        </NuxtLink>
        <pre>{{ houses }}</pre>
      </div>
    </div>
  </section>
</template>
