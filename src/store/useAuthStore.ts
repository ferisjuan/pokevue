import { defineStore } from "pinia";
import { ref } from "vue";
import { LOCALSTORAGE } from "../constants";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(
    localStorage.getItem(LOCALSTORAGE.isAuthenticated) === "true"
  );

  const login = () => {
    localStorage.setItem(LOCALSTORAGE.isAuthenticated, "true");
    isAuthenticated.value = true;
  };

  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE.isAuthenticated);
    isAuthenticated.value = false;
  };

  return { isAuthenticated, login, logout };
});
