<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query"
import { getHouseById } from "@/apis/house"
import { Bath, BedDouble, Scaling } from "lucide-vue-next"

const route = useRoute()
const id = route.params.id as string

const { data: house, suspense } = useQuery({
  queryKey: ["house", id],
  queryFn: () => getHouseById(id),
  enabled: !!id,
})
await suspense()
</script>

<template>
  <section>
    <div class="container mx-auto mb-14 min-h-[800px]">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 class="text-2xl font-semibold">{{ house?.name }}</h2>
          <h3 class="mb-4 text-lg">{{ house?.address }}</h3>
        </div>

        <div class="mb-4 flex gap-x-2 text-sm lg:mb-0">
          <div class="rounded-full bg-green-500 px-3 text-white">
            {{ house?.type }}
          </div>
          <div class="rounded-full bg-violet-500 px-3 text-white">
            {{ house?.country }}
          </div>
        </div>

        <Price :price="house?.price ?? 0" class="text-3xl" />
      </div>

      <div class="flex flex-col items-start gap-8 lg:flex-row">
        <div class="max-w-[768px]">
          <div class="mb-8">
            <img :src="house?.image" :alt="house?.name" class="rounded-lg" />
          </div>

          <div class="mb-6 flex gap-x-6 font-semibold text-violet-700">
            <div class="flex items-center gap-x-2">
              <BedDouble :size="18" />
              <div>{{ house?.bedrooms }}</div>
            </div>

            <div class="flex items-center gap-x-2">
              <Bath :size="18" />
              <div>{{ house?.bathrooms }}</div>
            </div>

            <div class="flex items-center gap-x-2">
              <Scaling :size="18" />
              <div>{{ house?.surface }}</div>
            </div>
          </div>

          <div>{{ house?.description }}</div>
        </div>

        <div class="flex-1">
          <div>
            <div>
              <img :src="house?.agent.image" :alt="house?.agent.name" />
            </div>

            <div>
              <div>{{ house?.agent.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
