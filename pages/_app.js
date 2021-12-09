import "../styles/globals.scss";
import { Fragment } from "react";

// Components
import Navbar from "@ui/layout/Navbar";
import FooterStrip from '@ui/layout/FooterStrip'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <FooterStrip/>
    </Fragment>
  );
}

export default MyApp;
