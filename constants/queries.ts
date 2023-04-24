import { gql } from '@apollo/client';

export const TOTAL_ITEMS = 151;
export const PER_PAGE = 12;

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

export const GET_POKEMON_DETAIL_QUERY = gql`
  query getPokemonDetailQuery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
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
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const GET_ALL_POKEMON_STATS_QUERY = gql`
  query getAllPokemonStatsQuery {
    pokemon_v2_stat {
      id
      name
    }
  }
`;
