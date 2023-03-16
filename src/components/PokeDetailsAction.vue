<template>
  <div @click="goToPokemonDetails(id)" class="prose cursor-pointer text-3xl">
    ↗️
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useGoToPokemonDetails } from "../composables";

defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const { goToPokemonDetails } = useGoToPokemonDetails();
</script>
