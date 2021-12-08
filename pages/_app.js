import "../styles/globals.scss";
import { Fragment } from "react";

// Components
import Navbar from "@UI/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
