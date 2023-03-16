<template>
  <section class="relative">
    <input
      type="text"
      placeholder="Search for a pokemon..."
      class="input-bordered input-primary input w-full max-w-xs"
      v-model="pokemonSearchInput"
    />
    <ul
      v-if="pokemonTypeahead.length > 0"
      class="menu absolute top-[50px] z-50 w-56 bg-base-100 shadow-lg"
    >
      <li v-for="pokemon in pokemonTypeahead" :key="pokemon.id">
        <a
          @click="goToPokemonDetails(pokemon.id)"
          class="menu-item prose flex items-center justify-between text-xl capitalize"
          >{{ pokemon.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useGoToPokemonDetails } from "../composables";
import { usePokemonStore } from "../store";
import PokeDetailsAction from "./PokeDetailsAction.vue";

const pokemonSearchInput = ref("");

const pokemonStore = usePokemonStore();
const { resetPokemonTypeAhead, searchPokemonTypeAhead } = pokemonStore;

const { pokemonTypeahead } = storeToRefs(pokemonStore);

const { goToPokemonDetails } = useGoToPokemonDetails();

resetPokemonTypeAhead();
watch(pokemonSearchInput, (newVal) => {
  searchPokemonTypeAhead(newVal);
});
</script>
