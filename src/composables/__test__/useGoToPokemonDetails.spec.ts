import { expect, describe, it, vi } from "vitest";
import { useGoToPokemonDetails } from "../useGoToPokemonDetails";

// use vitest to mock the vue-router useRouter function
vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("useGoToPokemonDetails", () => {
  it("should return a function", () => {
    expect(useGoToPokemonDetails()).toMatchSnapshot();
  });

  it("should navigate to the pokemon details page", () => {
    const { goToPokemonDetails } = useGoToPokemonDetails();
    expect(goToPokemonDetails(1)).toMatchSnapshot();
  });
});
