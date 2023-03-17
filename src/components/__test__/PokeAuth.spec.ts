import { beforeEach, describe, it, expect, vi } from "vitest";
import { mount, RouterLinkStub, shallowMount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";

import { useAuthStore } from "../../store";
import PokeAuthVue from "../PokeAuth.vue";

vi.mock("vue-router", () => ({
  RouterLink: () => RouterLinkStub,
  createRouter: () => ({
    push: vi.fn(),
  }),
  createWebHistory: () => ({
    push: vi.fn(),
  }),
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

function mountPokeAuth() {
  const wrapper = mount(PokeAuthVue, {
    global: {
      stubs: {
        FormKit: { template: "<span/>" },
      },
    },
    shallow: true,
  });
  return wrapper;
}

describe("PokeAuth", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () => expect(mountPokeAuth()).toMatchSnapshot());
});
