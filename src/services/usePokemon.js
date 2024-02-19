import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../pages/Root";

export const usePokemon = (name) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json()),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const invalidatePokemon = () => queryClient.invalidateQueries();

  return { pokemon: data, isPending, error, invalidatePokemon };
};
