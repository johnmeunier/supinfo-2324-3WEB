import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      if (promiseGetAllPokemons.ok) {
        const pokemon = await promiseGetAllPokemons.json();
        setPokemon(pokemon);
      } else {
        if (promiseGetAllPokemons.status === 404) {
          setError("Pokemon not found");
        } else {
          setError("Error");
        }
      }
    }
    fetchData();
  }, []);

  return error ? (
    error
  ) : pokemon ? (
    <>
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
    </>
  ) : (
    "Chargement en cours"
  );
};
