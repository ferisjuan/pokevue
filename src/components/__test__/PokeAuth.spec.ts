import { beforeEach, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import { useAuthStore } from "../../store";
import PokeAuthVue from "../PokeAuth.vue";

describe("PokeAuth", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () =>
    expect(
      mount(PokeAuthVue, {
        global: {
          provide: {
            authStore: useAuthStore(),
            localStorage,
          },
        },
      }).html()
    ).toMatchSnapshot());
});
