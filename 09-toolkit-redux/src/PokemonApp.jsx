import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {page, pokemons = [], isLoading } = useSelector((state) => state.pokemon); 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPokemons(0));
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon app</h1>
      <hr />
      <p>Loading: {isLoading || false}</p>
      <p>Page: {page || 0}</p>

      <ul>
        {
          pokemons?.map((pokemon) => {
            return <li key={pokemon}>{pokemon.name}</li>
          })
        }
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
