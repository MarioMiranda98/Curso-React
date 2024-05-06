import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    endLoadingPokemons: (state) => {
      state.isLoading = false;
    },
    setPokemons: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});

export const { startLoadingPokemons, endLoadingPokemons, setPokemons } = pokemonSlice.actions;