<template>
  <main class="container">
    <h1 class="prose my-4 text-4xl font-bold">Pokemons!</h1>
    <Suspense>
      <PokeTable />
    </Suspense>
  </main>
</template>

<script lang="ts" setup>
import PokeTable from "../components/PokeTable.vue";
</script>
