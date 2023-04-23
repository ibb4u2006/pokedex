import type { NextPage } from 'next';
import Head from 'next/head';
import PokemonList from '../../components/sections/PokemonList';
import Search from '../../components/sections/Search';

const PokemonListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-blue-100 p-6">
        <Search />
        <PokemonList />
      </main>
    </>
  );
};

export default PokemonListPage;
