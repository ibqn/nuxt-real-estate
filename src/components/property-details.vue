<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query"
import { getHouseById } from "@/apis/house"
import { Bath, BedDouble, Scaling } from "lucide-vue-next"
import { useForm } from "vee-validate"

const { handleSubmit, defineField } = useForm()

const [name, nameAttrs] = defineField("name")
const [email, emailAttrs] = defineField("email")
const [phone, phoneAttrs] = defineField("phone")
const [message, messageAttrs] = defineField("message")

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

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

        <div
          class="mb-8 w-full flex-1 rounded-lg border border-gray-300 bg-white px-6 py-8"
        >
          <div class="mb-8 flex items-center gap-x-4">
            <div class="size-20 rounded-full border border-gray-300 p-1">
              <img :src="house?.agent.image" :alt="house?.agent.name" />
            </div>

            <div>
              <div class="text-lg font-bold">{{ house?.agent.name }}</div>
              <NuxtLink to="/" class="text-sm text-violet-700"
                >View Listings</NuxtLink
              >
            </div>
          </div>

          <form @submit="onSubmit">
            <input
              v-model="name"
              v-bind="nameAttrs"
              placeholder="Name*"
              type="text"
              class="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
            />

            <input
              v-model="email"
              v-bind="emailAttrs"
              placeholder="Email*"
              type="email"
              class="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
            />

            <input
              v-model="phone"
              v-bind="phoneAttrs"
              placeholder="Phone number*"
              type="text"
              class="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
            />

            <textarea
              class="h-36 w-full resize-none rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
              v-model="message"
              v-bind="messageAttrs"
              placeholder="Message*"
            ></textarea>

            <div class="flex flex-col gap-2 md:flex-row">
              <button
                class="w-full rounded-lg bg-violet-700 p-4 text-sm capitalize text-white transition hover:bg-violet-800"
                type="submit"
              >
                send message
              </button>
              <button
                class="w-full rounded-lg border p-4 text-sm capitalize text-violet-700 transition hover:border-violet-500 hover:text-violet-500"
              >
                call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
