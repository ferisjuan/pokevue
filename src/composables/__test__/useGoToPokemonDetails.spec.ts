import { expect, describe, it, vi } from "vitest";
import { useGoToPokemonDetails } from "../useGoToPokemonDetails";

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("useGoToPokemonDetails", () => {
  it("should return a function", () => {
    expect(typeof useGoToPokemonDetails()).toBe("object");
  });

  it("should navigate to the pokemon details page", () => {
    const { goToPokemonDetails } = useGoToPokemonDetails();
    expect(goToPokemonDetails(1)).toMatchSnapshot();
  });
});
