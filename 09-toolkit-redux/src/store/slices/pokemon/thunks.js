import { pokemonApi } from "../../../api/pokemonApi";
import { endLoadingPokemons, setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemons());

    //TODO: Realizar peticion Http
    const response = await pokemonApi.get(`pokemon?limit=10&offset=${page}`);

    dispatch(setPokemons({ pokemons: response.data.results, page: page + 1 }));

    //TODO: Quitar el loading
    dispatch(endLoadingPokemons());
  }
}