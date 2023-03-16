import { defineStore } from "pinia";
import { ref } from "vue";
import { BASE_URL } from "../constants";
import type { Pokemon, Result } from "../types/pokemon.types";

export const usePokemonStore = defineStore("pokemon", () => {
  const count = ref(0);
  const limit = 10;
  const page = ref(0);
  const offset = ref(0);
  const pages = ref(new Map<number, Pokemon[]>());
  const totalPages = ref(0);

  const FAVORITE_KEY = "favorites";
  const _favorites = localStorage.getItem(FAVORITE_KEY);
  const favoritesList = _favorites ? JSON.parse(_favorites) : [];
  const favoritePokemons = ref<number[]>(favoritesList);

  const pokemons = ref<Pokemon[]>([]);

  const fetchPokemonsList = async (): Promise<void> => {
    const response = await fetch(
      `${BASE_URL}/pokemon?offset=${offset.value}&limit=${limit}}`
    );

    const data = await response.json();

    pokemons.value = [];

    data.results.forEach((result: Result) => fetchPokemons(result.url));

    pages.value.set(page.value, pokemons.value);

    count.value = data.count;
    totalPages.value = Math.ceil(count.value / limit);
  };

  const fetchPokemons = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data = await response.json();

    const isFavorite = !!favoritePokemons.value.includes(data.id);
    pokemons.value.push({ ...data, isFavorite });
  };

  const fetchPokemonPage = async (_page: number): Promise<void> => {
    page.value = _page;

    if (pages.value.has(page.value)) {
      pokemons.value = pages.value.get(page.value) || [];
      return;
    }

    const _offset = (page.value = 1 ? page.value : Math.abs(page.value - 1));
    offset.value = (_offset - 1) * limit;

    if (count.value > 0 && offset.value > count.value)
      offset.value = count.value - 1;

    fetchPokemonsList();
  };

  const getPokemon = (id: number): Pokemon | undefined => {
    const pokemon = pokemons.value.find((pokemon) => {
      return pokemon.id === id;
    });
    console.log("🚀 ~ getPokemon ~ pokemon:", pokemon);
    return pokemon;
  };

  const toggleFavoritePokemon = (pokemonId: number): void => {
    if (_favorites) {
      if (favoritesList.includes(pokemonId)) {
        const index = favoritesList.indexOf(pokemonId);
        console.log("🚀 ~ toggleFavoritePokemon ~ index:", index);

        favoritesList.splice(index, 1);
      } else {
        favoritesList.push(pokemonId);
        favoritePokemons.value = favoritesList;
      }

      localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoritesList));
    } else {
      localStorage.setItem(FAVORITE_KEY, JSON.stringify([pokemonId]));
      favoritePokemons.value = [pokemonId];
    }
  };

  return {
    count,
    fetchPokemonPage,
    getPokemon,
    page,
    pokemons,
    toggleFavoritePokemon,
    totalPages,
  };
});
