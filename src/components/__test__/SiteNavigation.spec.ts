import { mount, RouterLinkStub, shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAuthStore } from "../../store";
import SiteNavigationVue from "../SiteNavigation.vue";

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

function mountSiteNavigation() {
  const wrapper = shallowMount(SiteNavigationVue);
  return wrapper;
}

describe("SiteNavigation", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render", () => {
    expect(mountSiteNavigation()).toMatchSnapshot();
  });

  it("should have the title", () => {
    expect(mountSiteNavigation().find("#title").exists()).toBeTruthy();
  });

  it("should have only one option if user is not authN", async () => {
    const wrapper = mount(SiteNavigationVue);

    expect(wrapper.find("#contact").text()).toContain("Contact");
  });

  it("should have the full menu if user is authN", async () => {
    const authStore = useAuthStore();
    const store = authStore;
    store.isAuthenticated = true;

    expect(mountSiteNavigation().find("#home").exists()).toBeTruthy();
    expect(mountSiteNavigation().find("#favorite").exists()).toBeTruthy();
    expect(mountSiteNavigation().find("#logout").exists()).toBeTruthy();
  });
});
