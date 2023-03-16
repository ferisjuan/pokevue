import { useRouter } from "vue-router";

export const useGoToPokemonDetails = () => {
  const router = useRouter();
  const goToPokemonDetails = (id: number) =>
    router.push({
      name: "pokemon-details",
      params: { id: String(id) },
    });
  return { goToPokemonDetails };
};
