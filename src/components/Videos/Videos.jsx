import React from "react"
import { useStaticQuery, graphql } from "gatsby";

const Videos = () => {
  const {
    allYouTubeRss: { nodes },
    allTwitch: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allYouTubeRss {
          nodes {
            media_title
            media_thumbnail
            entry___link
          }
        }
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
  const [youtube] = nodes;

  return (
    <div className="videos">
      <h2>Latest Videos</h2>
      {!!youtube && (
        <a href={youtube.entry___link[0]}>
          <img
            src={youtube.media_thumbnail[0]}
            alt={youtube.media_title[0]}
            className="youtube_thumbnail"
          />
          <p>{youtube.media_title[0]}</p>
        </a>
      )}
      {!!node && (
        <a href={node.data.url}>
          <img src={node.data.thumbnail_url} alt={node.data.title} />
          <h2>{node.data.title}</h2>
        </a>
      )}
    </div>
  );
};

export default Videos;
