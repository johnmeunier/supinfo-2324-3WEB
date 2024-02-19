import { useAtom } from "jotai";
import { animeAtom, randomCityAtom } from "../services/atom";
import { usePokemon } from "../services/usePokemon";

export default () => {
  const [anime] = useAtom(animeAtom);
  const [city] = useAtom(randomCityAtom);
  const { pokemon, isPending } = usePokemon("pikachu");

  return (
    <footer>
      Cours SUPINFO 3WEB - {anime[0].title} - {city} - {!isPending ? pokemon.name : ""}
    </footer>
  );
};
