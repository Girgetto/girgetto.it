import React from "react";
import PropTypes from "prop-types";

import * as Components from "../components";
import Layout from "../layout";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Components.SEO title="Home" />
    <div style={{ display: "flex" }}>
      <Components.Header />
      <Components.Videos />
    </div>
    <Components.Posts />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape(),
};
