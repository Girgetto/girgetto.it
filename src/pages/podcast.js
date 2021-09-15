import React from "react";
import PropTypes from "prop-types";

import Layout from '../layout';
import * as Components from "../components";

const Podcast = ({ location }) => (
  <Layout location={location}>
    <Components.SEO title="Podcast" />
  </Layout>
);

export default Podcast;

Podcast.propTypes = {
  location: PropTypes.shape(),
};
