import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

const Layout = ({ location, children }) => {
  return (
    <>
      <Navbar location={location} />
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  location: PropTypes.shape(),
  children: PropTypes.arrayOf(PropTypes.shape()),
};
