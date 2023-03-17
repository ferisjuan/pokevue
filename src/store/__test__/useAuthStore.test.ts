import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "../useAuthStore";
import { expect, describe, it, vi, beforeEach } from "vitest";

describe("Auth Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should not be logged", () => {
    const store = useAuthStore();

    expect(store.isAuthenticated).toBeFalsy();
  });

  it("Should login", () => {
    const store = useAuthStore();

    store.login();
    expect(store.isAuthenticated).toBeTruthy();
  });

  it("Should logout", () => {
    const store = useAuthStore();

    store.login();
    store.logout();

    expect(store.isAuthenticated).toBeFalsy();
  });
});
