import { defineStore } from "pinia";
import { ref } from "vue";
import { LOCALSTORAGE } from "../constants";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  console.log("🚀 ~ useAuthStore ~ isAuthenticated:", isAuthenticated.value);

  const login = () => {
    localStorage.setItem(LOCALSTORAGE.isAuthenticated, "true");
    isAuthenticated.value = true;
  };

  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE.isAuthenticated);
    isAuthenticated.value = false;
    console.log("🚀 ~ logout ~ isAuthenticated.value:", isAuthenticated.value);
  };

  return { isAuthenticated, login, logout };
});
