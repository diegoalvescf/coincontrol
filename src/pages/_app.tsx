import { AuthenticationProvider } from '@/data/contexts/AuthContext';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
      }}
    >
      <AuthenticationProvider>
        <Head>
          <title>Coin Control</title>
          <link
            rel='icon'
            href='/favicon.ico'
          />
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthenticationProvider>
    </MantineProvider>
  );
}
