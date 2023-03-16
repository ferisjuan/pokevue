import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { LOCALSTORAGE } from "../constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Home",
      },
    },
    {
      path: "/pokemon/:id",
      name: "pokemon-details",
      component: () => import("../views/PokemonDetailsView.vue"),
      meta: {
        title: "Pokemon Details",
      },
    },
    {
      path: "/favorite-pokemons",
      name: "favorite-pokemons",
      component: () => import("../views/FavoritePokemonView.vue"),
      meta: {
        title: "Favorite Pokemons",
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      meta: {
        title: "Auth",
      },
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated: string =
    localStorage.getItem(LOCALSTORAGE.isAuthenticated) || "";

  if (isAuthenticated !== "true" && to.name !== "auth") {
    return {
      name: "auth",
    };
  }

  if (isAuthenticated === "true" && to.name === "auth") {
    return false;
  }

  return true;
});

router.afterEach((to) => {
  nextTick(() => {
    // @ts-ignore
    document.title = to.meta.title || "Pokemon App";
  });
});

export default router;
