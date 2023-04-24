import { useQuery } from '@apollo/client';
import {
  getPokemonListOption,
  GET_POKEMON_DETAIL_QUERY,
  GET_POKEMON_LIST_QUERY,
} from '../constants/queries';

export const useGetPokemonList = () => {
  return useQuery(GET_POKEMON_LIST_QUERY, { ...getPokemonListOption });
};

export const useGetPokemonDetail = (slug: string) => {
  return useQuery(GET_POKEMON_DETAIL_QUERY, {
    variables: {
      name: slug,
    },
  });
};
