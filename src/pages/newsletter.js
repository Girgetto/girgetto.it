import React from "react";
import PropTypes from "prop-types";

import Layout from '../layout';
import * as Components from "../components";

const Newsletter = ({ location }) => (
  <Layout location={location} >
    <Components.SEO title="Newsletter" />
  </Layout>
);

export default Newsletter;

Newsletter.propTypes = {
  location: PropTypes.shape(),
};
