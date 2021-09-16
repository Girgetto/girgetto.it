import React from "react";
import PropTypes from "prop-types";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ location, children }) => {
  deckDeckGoHighlightElement();
  return (
    <>
      <Navbar location={location} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.shape(),
  children: PropTypes.arrayOf(PropTypes.shape()),
};
