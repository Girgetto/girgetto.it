import React from "react";
import PropTypes from "prop-types";

import * as Components from "../components";
import Layout from "../layout";

import dotenv from "dotenv";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = "UChqlNb3LpXclrYsIXzD2q_w";

export async function getServerData() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
  );
  const data = await response.json();

  return { props: data };
}

const IndexPage = ({ location, serverData }) => (
  <Layout location={location}>
    <Components.SEO title="Home" />
    <div style={{ ...styles.container }}>
      <Components.Header />
      <Components.Videos serverData={serverData} />
    </div>
    <Components.Posts />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape(),
};
