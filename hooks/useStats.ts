import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMON_STATS_QUERY } from '../constants/queries';

export const useGetAllPokemonStats = () => {
  return useQuery(GET_ALL_POKEMON_STATS_QUERY);
};
