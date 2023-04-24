import { gql } from '@apollo/client';

export const TOTAL_ITEMS = 151;
export const PER_PAGE = 10;

export const getPokemonListOption = {
  variables: {
    limit: TOTAL_ITEMS,
  },
};

export const GET_POKEMON_LIST_QUERY = gql`
  query getPokemonListQuery($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      weight
      height
      name
      pokemon_v2_pokemonstats {
        base_stat
        stat_id
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
