<template>
  <header class="mb-12 border-b py-6">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <img src="@/assets/img/logo.svg" alt="Logo" />
      </NuxtLink>

      <nav class="flex items-center gap-6">
        <NuxtLink to="/" class="transition hover:text-violet-900">
          Sign In
        </NuxtLink>
        <NuxtLink
          to="/"
          class="rounded-lg bg-violet-700 px-4 py-3 text-white transition hover:bg-violet-800"
        >
          Sign Up
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
