import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
