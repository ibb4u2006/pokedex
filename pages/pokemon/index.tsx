import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useMemo, useState } from 'react';
import Loader from '../../components/common/Loader';
import PokemonList from '../../components/sections/PokemonList';
import Search from '../../components/sections/Search';
import {
  getPokemonListOption,
  GET_POKEMON_LIST_QUERY,
} from '../../constants/queries';
import { useGetPokemonList } from '../../hooks/usePokemon';
import { initializeApollo, addApolloState } from '../../lib/apolloClient';

export type Pokemon = {
  id: number;
  height: number;
  name: string;
  weight: number;
  image: string;
  abilities: string[];
  stats: { id: number; value: number }[];
  types?: string[];
};

const PokemonListPage: NextPage = () => {
  const [page, setPage] = useState(1);
  const [searchString, setSearchString] = useState<string>('');
  const { data, loading: isLoadingPokemonList } = useGetPokemonList();

  const isLoading = isLoadingPokemonList;
  const pokemonList = data?.pokemon_v2_pokemon;

  const pokemons = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pokemonDataList = pokemonList.map((pokemon: Record<string, any>) => {
      const {
        id,
        height,
        name,
        weight,
        pokemon_v2_pokemonabilities,
        pokemon_v2_pokemonsprites,
        pokemon_v2_pokemonstats,
      } = pokemon ?? {};

      const abilities = pokemon_v2_pokemonabilities?.map(
        (ability: { pokemon_v2_ability: { name: string } }) =>
          ability?.pokemon_v2_ability?.name
      );

      const image = JSON.parse(
        pokemon_v2_pokemonsprites?.at(0)?.sprites
      )?.front_default;

      const stats = pokemon_v2_pokemonstats?.map(
        (stat: { stat_id: number; base_stat: number }) => ({
          id: stat?.stat_id,
          value: stat?.base_stat,
        })
      );

      return {
        id,
        height,
        name,
        weight,
        abilities,
        image,
        stats,
      };
    }) as Pokemon[];

    const filteredPokemons = pokemonDataList.filter((pokemon) => {
      return Object.values(pokemon).some((val) => {
        return (
          typeof val === 'string' &&
          val.includes(searchString?.toLowerCase() as string)
        );
      });
    });

    const pokemons = searchString !== '' ? filteredPokemons : pokemonDataList;
    return pokemons;
  }, [pokemonList, searchString]);

  const handleStringChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchString(value);
    setPage(1);
  };

  const handleCancelSearch = () => {
    setSearchString('');
    setPage(1);
  };

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <Loader isLoading={isLoading}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-blue-100 p-6 pb-10">
        <Search
          searchValue={searchString ?? ''}
          onStringChange={handleStringChange}
          onCancelClick={handleCancelSearch}
        />
        <PokemonList
          page={page}
          data={pokemons}
          searchString={searchString ?? ''}
          onCancelSearch={handleCancelSearch}
          onPageChange={handlePage}
        />
      </main>
    </Loader>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POKEMON_LIST_QUERY,
    variables: getPokemonListOption.variables,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default PokemonListPage;
