import { useContext } from "react";
import { Link } from "react-router-dom";
import { LevelContext } from "../services/LevelContext";
import { citiesAtom, cityIndexAtom } from "../services/atom";
import { useAtom } from "jotai";

export default () => {
  const { setLevel } = useContext(LevelContext);
  const [cities] = useAtom(citiesAtom);

  return (
    <header>
      <h1>Pokemon</h1>
      <button onClick={() => setLevel((level) => level + 1)}>+</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/pokemon">Liste</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
