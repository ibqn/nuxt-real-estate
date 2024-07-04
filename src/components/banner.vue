<script lang="ts" setup>
import Search from "@/components/search.vue"
</script>

<template>
  <section class="mb-8 h-full max-h-[640px] bg-rose-200 xl:mb-24">
    <div class="flex flex-col lg:flex-row">
      <div
        class="text flex flex-1 flex-col items-center justify-center bg-center px-4 lg:ml-8 lg:items-start lg:px-0 lg:text-left xl:ml-[135px]"
      >
        <h1
          class="mb-6 text-4xl font-semibold capitalize leading-none lg:text-[58px]"
        >
          <span class="text-violet-700">Rent</span> Your Dream House With Us.
        </h1>

        <p class="mb-8 max-w-[480px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          assumenda aperiam, quam et velit earum voluptatum praesentium
          repudiandae quasi necessitatibus!
        </p>
      </div>

      <div class="hidden flex-1 items-end justify-end lg:flex">
        <img src="@/assets/img/house-banner.png" alt="House banner" />
      </div>
    </div>

    <Search />
  </section>
</template>
