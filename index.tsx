import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello pokedex!</h1>
      </main>

      <footer>
        <p className="text-sm">App Footer</p>
      </footer>
    </>
  );
};

export default Home;
