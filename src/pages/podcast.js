import React from "react";

import Layout from '../layout';
import * as Components from "../components";

const Podcast = ({ location }) => (
  <Layout location={location}>
    <Components.SEO title="Podcast" />
  </Layout>
);

export default Podcast;
