<script setup lang="ts">
import SiteNavigation from "./components/SiteNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <section class="flex flex-col him-h-screen font-Roboto">
    <SiteNavigation />

    <RouterView v-slot="{Component}" >
      <component :is="Component" />
    </RouterView>
  </section>
</template>
