import React from "react";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ location, children }) => {
  deckDeckGoHighlightElement();
  return (
    <main style={{
      maxWidth: `1780px`,
      margin: `0 auto`,
    }}>
      <Navbar location={location} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
