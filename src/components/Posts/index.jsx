import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Card from "../../templates/Card";

export default function Posts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                description
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="container">
      {edges.map((post) => (
        <Card {...post} />
      ))}
    </div>
  );
}
