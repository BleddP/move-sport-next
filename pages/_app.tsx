import "../styles/globals.scss";
import { useEffect, Fragment } from "react";

// Typescript
import type { AppProps } from 'next/app'

// Components
import Navbar from "@ui/layout/Navbar";
import FooterStrip from '@ui/layout/FooterStrip'

import {getLCP, getFID, getCLS} from 'web-vitals';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);  
  }, [])

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <FooterStrip/>
    </Fragment>
  );
}

export default MyApp;
