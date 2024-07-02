<script lang="ts" setup>
import Search from "@/components/search.vue"
</script>

<template>
  <section class="mx-h-[640px] mb-8 h-full bg-rose-200 xl:mb-24">
    <div class="flex flex-col lg:flex-row">
      <div>
        <h1><span>Rent</span> Your Dream House With Us.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          assumenda aperiam, quam et velit earum voluptatum praesentium
          repudiandae quasi necessitatibus!
        </p>
      </div>

      <div>
        <img src="@/assets/img/house-banner.png" alt="House banner" />
      </div>
    </div>

    <Search />
  </section>
</template>
