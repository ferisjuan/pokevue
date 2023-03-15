import { defineStore } from "pinia";
import { ref } from "vue";
import { BASE_URL } from "../constants";
import type { Pokemon, Result } from "../types/pokemon.types";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = ref<Pokemon[]>([]);
  const count = ref(0);
  const next = ref("");
  const previous = ref("");

  const fetchPokemonsList = async (): Promise<void> => {
    const response = await fetch(`${BASE_URL}/pokemon`);
    const data = await response.json();

    data.results.forEach((result: Result) => fetchPokemons(result.url));

    count.value = data.count;
    next.value = data.next;
    previous.value = data.previous;
  };

  const fetchPokemons = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data = await response.json();

    pokemons.value.push(data);
  };

  return { count, fetchPokemonsList, next, pokemons, previous };
});
