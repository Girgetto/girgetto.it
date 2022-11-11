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
      <h1>Último streaming</h1>
      {node.data.id < 0 ? (
        <p>No hay videos esta semana 😞</p>
      ) : (
        <a href={node.data.url} rel="noreferrer" target="_blank">
          <p>
            <b>Twitch</b> 👉 {node.data.title}
          </p>
        </a>
      )}
    </div>
  );
};

export default Videos;
