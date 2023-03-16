<template>
  <div @click="goToPokemonDetails(id)" class="prose cursor-pointer text-3xl">
    ↗️
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const router = useRouter();
const goToPokemonDetails = (id: number) =>
  router.push({
    name: "pokemon-details",
    params: { id: String(id) },
  });
</script>
