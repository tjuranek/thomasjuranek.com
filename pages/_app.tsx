import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/globals.css'
import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
            <title>Thomas Juranek</title> 
          </Head>

          <Component {...pageProps} />
      </>
  );
}

export default MyApp
