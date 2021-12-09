import "../styles/globals.scss";
import { Fragment } from "react";

// Components
import Navbar from "@components/ui-components/Layout/Navbar";
import FooterStrip from '@components/ui-components/Layout/FooterStrip'

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
