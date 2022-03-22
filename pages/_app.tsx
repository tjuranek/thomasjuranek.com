import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { initializeAnalytics, trackEvent } from '../utils/firebase';
import '../styles/globals.css'
import '../styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        initializeAnalytics();

        router.events.on('routeChangeComplete', (url) => {
            trackEvent('page_view', { url });
        });
    }, []);

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
