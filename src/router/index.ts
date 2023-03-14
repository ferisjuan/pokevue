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
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthView.vue"),
      meta: {
        title: "Auth",
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
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

export default router;
