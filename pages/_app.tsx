import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../components/common/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const { events } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    events.on('routeChangeStart', () => setIsLoading(true));
    events.on('routeChangeComplete', () => setIsLoading(false));
    events.on('routeChangeError', () => setIsLoading(false));
    return () => {
      events.off('routeChangeStart', () => setIsLoading(true));
      events.off('routeChangeComplete', () => setIsLoading(false));
      events.off('routeChangeError', () => setIsLoading(false));
    };
  }, [events]);

  return (
    <ApolloProvider client={apolloClient}>
      <Loader isLoading={isLoading}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Loader>
    </ApolloProvider>
  );
}

export default MyApp;
