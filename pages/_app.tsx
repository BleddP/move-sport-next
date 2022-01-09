import "../styles/globals.scss";
import { Fragment } from "react";

// Typescript
import type { AppProps } from 'next/app'

// Components
import Navbar from "@ui/layout/Navbar";
import FooterStrip from '@ui/layout/FooterStrip'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <FooterStrip/>
    </Fragment>
  );
}

export default MyApp;
