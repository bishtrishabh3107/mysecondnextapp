import '../styles/index.scss';
import 'tailwindcss/tailwind.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Global/Layout';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ThemeProvider attribute="class">
          <Layout />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
