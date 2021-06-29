import axios from "axios";
import { calcBST } from "~/utils/pokemonProps";

export const fetchPokemon = async (pokemonNumber) => {
  try {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(BASE_URL + pokemonNumber);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonWithBSTLowerThan500 = async (pokemonNumber) => {
  try {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(BASE_URL + pokemonNumber);
    if (calcBST(response.data.stats) <= 500) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
