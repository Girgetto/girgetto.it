import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Videos = () => {
  const {
    allTwitch: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allTwitch(limit: 1) {
          edges {
            node {
              id
              data {
                title
                url
                thumbnail_url
              }
            }
          }
        }
      }
    `
  );
  const [{ node }] = edges;

  return (
    <div className="videos">
      <h1>Últimos videos</h1>
      {/* <img
        src={node.data.thumbnail_url
          .replace("%{width}", "200")
          .replace("%{height}", "100")}
        alt="twitch"
        style={{ cursor: "pointer", borderRadius: "5%"}}
        onClick={() => {
          window.open(node.data.url, "_blank");
        }}
      /> */}
      <a href={node.data.url} rel="noreferrer" target="_blank">
        <p><b>Twitch</b> 👉 {node.data.title}</p>
      </a>
    </div>
  );
};

export default Videos;
