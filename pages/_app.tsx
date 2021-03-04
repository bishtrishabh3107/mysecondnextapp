import '../styles/index.scss';
import 'tailwindcss/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Global/Layout';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'components/Global/apolloClient';
function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
