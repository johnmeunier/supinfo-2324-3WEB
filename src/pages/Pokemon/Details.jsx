import { useParams } from "react-router-dom";
import { usePokemon } from "../../services/usePokemon";

export const Pokemon = () => {
  const { name } = useParams();

  const { pokemon, isPending, invalidatePokemon } = usePokemon(name);

  return !isPending ? (
    <>
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
      <button
        onClick={() => {
          invalidatePokemon();
        }}
      >
        Invalidate pokemon
      </button>
    </>
  ) : (
    "Chargement en cours"
  );
};

export default Pokemon;
