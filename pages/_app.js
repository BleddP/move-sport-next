import "../styles/globals.scss";
import { Fragment } from "react";

// Components
import Navbar from "@ui/Layout/Navbar";
import FooterStrip from '@ui/Layout/FooterStrip'

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
