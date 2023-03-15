<template>
  <main class="w-full overflow-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Types</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="pokemon in pokemons" :key="pokemon.name">
          <td>
            <article class="flex items-center">
              <img
                :src="pokemon.sprites.front_default"
                :alt="pokemon.name"
                class="aspect-square h-20 w-20"
              />
              <span class="prose text-3xl capitalize">{{ pokemon.name }}</span>
            </article>
          </td>
          <td>{{ pokemon.height }}</td>
          <td>{{ pokemon.weight }}</td>
          <td>
            <ul class="flex flex-wrap gap-1">
              <li v-for="type in pokemon.types" :key="type.type.name">
                <PokeType :type="type.type.name" />
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../store";
import PokeType from "./PokeType.vue";

const pokemonStore = usePokemonStore();
const { fetchPokemonsList } = pokemonStore;
await fetchPokemonsList();

const { pokemons } = storeToRefs(pokemonStore);
</script>
