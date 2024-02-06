import { useState, useEffect } from "react";
import Limit from "./components/Limit";
import Pagination from "./components/Pagination";
import { modifySearchParam } from "./url.pure";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(null);
  const [urlToFetch, setUrlToFetch] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(urlToFetch);
      const getAllPokemonsJSON = await promiseGetAllPokemons.json();
      setPreviousUrl(getAllPokemonsJSON.previous);
      setNextUrl(getAllPokemonsJSON.next);
      setCount(getAllPokemonsJSON.count);
      setPokemons(getAllPokemonsJSON.results);
    }
    fetchData();
  }, [urlToFetch]);

  useEffect(() => {
    setUrlToFetch((url) => modifySearchParam(url, "limit", limit));
  }, [limit]);

  return (
    <>
      <h2>Pokemon</h2>
      <Limit setLimit={setLimit} />
      <h3>Compteur : {pokemons.length}</h3>
      {pokemons.length > 0 ? (
        <>
          <ol>
            {pokemons.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ol>
          <Pagination
            previousUrl={previousUrl}
            nextUrl={nextUrl}
            setUrlToFetch={setUrlToFetch}
            urlToFetch={urlToFetch}
            limit={limit}
            count={count}
          />
        </>
      ) : (
        "Chargement en cours"
      )}
    </>
  );
};

export default App;
