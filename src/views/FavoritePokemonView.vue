<template>
  <main class="container">
    <section class="flex items-center justify-between">
      <h1 class="prose my-4 text-4xl font-bold">My favorite Pokemons!</h1>
    </section>

    <Suspense>
      <PokeFavorite />

      <template #fallback>
        <div class="flex justify-center">
          <progress class="progress w-56"></progress>
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import PokeFavorite from "../components/PokeFavorite.vue";
</script>
