<template>
  <div class="card w-full items-center bg-base-100 pt-8 shadow-xl">
    <h2 class="card-title mb-6 capitalize">
      {{ pokemon?.name }} {{ pokemon?.isFavorite ? "❤️" : "" }}
    </h2>

    <section class="flex flex-wrap gap-1">
      <article v-for="pokemonType in pokemon?.types" key="type.type.name">
        <PokeType :type="pokemonType.type.name" />
      </article>
    </section>

    <div class="flex w-3/4 flex-wrap justify-evenly">
      <figure
        v-for="sprite in Object.entries({ ...pokemon?.sprites }).slice(0, 8)"
        class="flex flex-col"
      >
        <img
          :alt="sprite[0]"
          :src="sprite[1]?.toString()"
          v-if="!!sprite[1]"
          class="aspect-square h-40"
        />
        <quote v-if="!!sprite[1]" class="capitalize">{{
          sprite[0].toString().replaceAll("_", " ")
        }}</quote>
      </figure>
    </div>
    <div class="card-body">
      <section class="stats">
        <article
          class="stat"
          v-for="stat in pokemon?.stats"
          :key="Math.random()"
        >
          <div class="stat-title prose capitalize">
            {{ stat.stat.name.replaceAll("-", " ") }}
          </div>
          <div class="stat-value">{{ stat.base_stat }}</div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePokemonStore } from "../store";
import PokeType from "./PokeType.vue";

const { params } = useRoute();

const pokemonStore = usePokemonStore();

const { getPokemon } = pokemonStore;
const pokemon = getPokemon(Number(params.id));
</script>
