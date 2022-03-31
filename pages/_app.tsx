import "../styles/globals.scss";
import { useEffect, Fragment } from "react";
import { useRouter } from 'next/router'


// Typescript
import type { AppProps } from 'next/app'

// Components
import Navbar from "@ui/layout/Navbar";
import FooterStrip from '@ui/layout/FooterStrip'

// Libs
import { pageview } from '../libs/analytics'
import { getLCP, getFID, getCLS } from 'web-vitals';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const logRouteChange = (url) => {
    pageview(url)
  }

  useEffect(() => {
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);
    router.events.on('routeChangeComplete', logRouteChange)
    return () => {
      router.events.off('routeChangeComplete', logRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <FooterStrip />
    </Fragment>
  );
}

export default MyApp;
