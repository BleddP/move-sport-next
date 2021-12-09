import "../styles/globals.scss";
import { Fragment } from "react";

// Components
import Navbar from "@UI/Layout/Navbar";
import FooterStrip from '@UI/Layout/FooterStrip'

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
