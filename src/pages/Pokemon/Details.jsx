import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemon = await promiseGetAllPokemons.json();
      setPokemon(pokemon);
    }
    fetchData();
  }, []);

  return pokemon ? (
    <>
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
    </>
  ) : (
    "Chargement en cours"
  );
};
