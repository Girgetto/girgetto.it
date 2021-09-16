import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Card from "../../templates/Card";

export default function Posts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(skip: 1, limit: 3) {
          edges {
            node {
              id
              frontmatter {
                title
                description
              }
              fields {
                slug
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
        <Card {...post} key={post.node.id}/>
      ))}
    </div>
  );
}
