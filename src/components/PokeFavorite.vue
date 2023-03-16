<template>
  <main
    class="flex w-full flex-col items-center overflow-auto"
    v-if="favoritePokemonsList.length > 0"
  >
    <table class="table w-full">
      <thead>
        <tr>
          <th class="prose">No.</th>
          <th class="prose">Name</th>
          <th class="prose">Types</th>
          <th class="prose">Details</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="pokemon in favoritePokemonsList.sort((a, b) =>
            a.id > b.id ? 1 : -1
          )"
          :key="pokemon.id"
        >
          <td>{{ String(pokemon.id).padStart(2, "0") }}</td>

          <td>
            <article class="flex items-center">
              <img
                :src="pokemon?.sprites?.front_default"
                :alt="pokemon.name"
                v-if="pokemon?.sprites?.front_default"
                class="aspect-square h-20"
              />

              <div
                class="flex aspect-square h-20 items-center justify-center"
                v-else-if="pokemon?.sprites?.front_default === null"
              >
                <img
                  :src="pokeball"
                  :alt="pokemon.name"
                  class="aspect-square h-10"
                />
              </div>
              <span class="prose text-3xl capitalize">{{ pokemon.name }} </span>
            </article>
          </td>

          <td>
            <ul class="flex flex-wrap gap-1">
              <li
                v-for="pokemonType in pokemon.types"
                :key="pokemonType.type.name"
              >
                <PokeType :type="pokemonType.type.name" />
              </li>
            </ul>
          </td>

          <td>
            <PokeDetailsAction :id="pokemon.id" />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import pokeball from "../assets/pokeball.png";
import PokeType from "./PokeType.vue";
import { usePokemonStore } from "../store";
import { storeToRefs } from "pinia";
import PokeDetailsAction from "./PokeDetailsAction.vue";

const pokemonStore = usePokemonStore();
const { fetchFavoritePokemons } = pokemonStore;
const { favoritePokemonsList } = storeToRefs(pokemonStore);

fetchFavoritePokemons();
</script>
