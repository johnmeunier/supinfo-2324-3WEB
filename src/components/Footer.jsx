import { useAtom } from "jotai";
import { animeAtom, randomCityAtom } from "../services/atom";

export default () => {
  const [anime] = useAtom(animeAtom);
  const [city] = useAtom(randomCityAtom);

  return (
    <footer>
      Cours SUPINFO 3WEB - {anime[0].title} - {city}
    </footer>
  );
};
