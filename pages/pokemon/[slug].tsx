import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { Pokemon } from '.';
import Loader from '../../components/common/Loader';
import PokemonDetail from '../../components/sections/PokemonDetail';
import {
  GET_ALL_POKEMON_STATS_QUERY,
  GET_POKEMON_DETAIL_QUERY,
} from '../../constants/queries';
import { useGetPokemonDetail } from '../../hooks/usePokemon';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';

const PokemonDetailPage: NextPage = () => {
  const { query, push } = useRouter();
  const { slug } = query;
  const { data, loading: isLoadingPokemonDetail } = useGetPokemonDetail(
    slug as string
  );

  const pokemonList = data?.pokemon_v2_pokemon;
  const isLoading = isLoadingPokemonDetail;

  const pokemon = useMemo(() => {
    const pokemonData = pokemonList?.at(0);
    const {
      id,
      height,
      name,
      weight,
      pokemon_v2_pokemonabilities,
      pokemon_v2_pokemonsprites,
      pokemon_v2_pokemonstats,
      pokemon_v2_pokemontypes,
    } = pokemonData ?? {};

    const abilities = pokemon_v2_pokemonabilities?.map(
      (ability: { pokemon_v2_ability: { name: string } }) =>
        ability?.pokemon_v2_ability?.name
    );

    const image =
      pokemon_v2_pokemonsprites &&
      JSON.parse(pokemon_v2_pokemonsprites?.at(0)?.sprites)?.front_default;

    const stats = pokemon_v2_pokemonstats?.map(
      (stat: { stat_id: number; base_stat: number }) => ({
        id: stat?.stat_id,
        value: stat?.base_stat,
      })
    );

    const types = pokemon_v2_pokemontypes?.map(
      (type: { pokemon_v2_type: { name: string } }) =>
        type?.pokemon_v2_type?.name
    );

    return {
      id,
      height,
      name,
      weight,
      abilities,
      image,
      stats,
      types,
    } as Pokemon;
  }, [pokemonList]);

  useEffect(() => {
    if (!pokemonList || pokemonList.length === 0) {
      push('/404');
    }
  }, [pokemonList, push]);

  return (
    <Loader isLoading={isLoading}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app pokemon detail page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-blue-100 p-6 pb-10">
        <PokemonDetail data={pokemon} />
      </main>
    </Loader>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const { slug } = context.query;

  await apolloClient.query({
    query: GET_POKEMON_DETAIL_QUERY,
    variables: {
      name: slug as string,
    },
  });

  await apolloClient.query({
    query: GET_ALL_POKEMON_STATS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default PokemonDetailPage;
