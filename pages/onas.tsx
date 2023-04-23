import type { NextPage } from 'next';
import Head from 'next/head';

const Onas: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedex - O Nás</title>
        <meta name="description" content="Pokedex app o nás" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full bg-blue-100">
        <>O Nás Page</>
      </main>
    </>
  );
};

export default Onas;
