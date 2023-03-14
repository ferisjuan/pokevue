<template>
  <header class="stiky top-0 bg-primary shadow-lg">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex">
        <RouterLink
          :to="{ name: 'home' }"
          class="flex items-center py-4 px-2 text-gray-100"
        >
          <span class="text-xl font-bold tracking-tight">Pokevue</span>
        </RouterLink>
      </div>

      <nav>
        <ul class="flex items-center text-sm text-gray-100">
          <li>
            <RouterLink
              :to="{ name: 'home' }"
              class="border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/juan-carlos-feris-gomez-216a243/"
              class="border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              target="_blank"
              >Contact</a
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'auth' }"
              class="border-b-4 border-transparent py-4 px-3 hover:border-gray-100"
              v-show="isAuthenticated"
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
