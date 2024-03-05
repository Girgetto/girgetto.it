import React from "react";
import PropTypes from "prop-types";

import * as Components from "../components";
import Layout from "../layout";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Components.SEO title="Home" />
    <div style={{ ...styles.container }}>
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
