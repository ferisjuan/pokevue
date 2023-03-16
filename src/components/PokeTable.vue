<template>
  <main
    class="flex w-full flex-col items-center overflow-auto"
    v-if="pokemons.length > 0"
  >
    <table class="table w-full">
      <thead>
        <tr>
          <th class="prose">No.</th>
          <th class="prose">Name</th>
          <th class="prose">Favorite</th>
          <th class="prose">Height</th>
          <th class="prose">Weight</th>
          <th class="prose">Types</th>
          <th class="prose">Details</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="pokemon in pokemons.sort((a, b) => (a.id > b.id ? 1 : -1))"
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
            <label className="swap">
              <input
                aria-label="favorite"
                :checked="pokemon.isFavorite"
                type="checkbox"
                @change="toggleFavoritePokemon(pokemon.id)"
              />

              <div className="swap-on text-5xl">😍</div>

              <div className="swap-off text-5xl">🫥</div>
            </label>
          </td>

          <td class="prose">{{ pokemon.height }} In</td>

          <td class="prose">{{ pokemon.weight }} lb</td>

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
            <div
              @click="goToPokemonDetails(pokemon.id)"
              class="prose cursor-pointer text-3xl"
            >
              ↗️
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="btn-group mt-2 mb-10">
      <button @click="fetchPokemonPage(1)" className="btn">1</button>

      <button
        @click="fetchPokemonPage(page - 1)"
        className="btn"
        v-if="page > 1"
      >
        «
      </button>

      <button className="btn btn-disabled">page {{ page }}</button>

      <button
        @click="fetchPokemonPage(page + 1)"
        className="btn"
        v-show="page < totalPages - 1"
      >
        »
      </button>

      <button @click="fetchPokemonPage(totalPages)" className="btn">
        {{ totalPages }}
      </button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import pokeball from "../assets/pokeball.png";
import { usePokemonStore } from "../store";
import PokeType from "./PokeType.vue";

const pokemonStore = usePokemonStore();
const { fetchPokemonPage, toggleFavoritePokemon } = pokemonStore;
await fetchPokemonPage(1);

const { page, pokemons, totalPages } = storeToRefs(pokemonStore);

const router = useRouter();
const goToPokemonDetails = (id: number) =>
  router.push({
    name: "pokemon-details",
    params: { id: String(id) },
  });
</script>
