import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES } from '../constants/routes';

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    push(ROUTES.pokemon);
  });
  return null;
};

export default Home;
