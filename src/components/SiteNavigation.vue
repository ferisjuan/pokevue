<template>
  <header class="stiky top-0 bg-primary shadow-lg">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex">
        <RouterLink
          :to="{ name: 'home' }"
          class="flex items-center py-4 px-2 text-gray-100"
          id="title"
        >
          <span class="prose text-xl font-bold tracking-tight">Pokevue</span>
        </RouterLink>
      </div>

      <nav>
        <ul class="flex items-center text-sm text-gray-100">
          <li v-if="isAuthenticated">
            <RouterLink
              :to="{ name: 'home' }"
              active-class="text-gray-100"
              class="prose border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              id="home"
            >
              Home
            </RouterLink>
          </li>
          <li v-if="isAuthenticated">
            <RouterLink
              :to="{ name: 'favorite-pokemons' }"
              active-class="text-gray-100"
              class="prose border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              id="favorite"
            >
              Favorite
            </RouterLink>
          </li>
          <li>
            <a
              class="prose border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              href="https://www.linkedin.com/in/juan-carlos-feris-gomez-216a243/"
              id="contact"
              target="_blank"
              >Contact</a
            >
          </li>
          <li v-if="isAuthenticated">
            <RouterLink
              :to="{ name: 'auth' }"
              class="prose border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              id="logout"
              @click="logout()"
            >
              Logout
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../store";

const authStore = useAuthStore();
const { logout } = authStore;
const { isAuthenticated } = storeToRefs(authStore);
</script>
