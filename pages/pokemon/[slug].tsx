import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PokemonDetailPage: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app pokemon detail page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-blue-100 p-6">
        <>Pokemon {slug} detail page</>
      </main>
    </>
  );
};

export default PokemonDetailPage;