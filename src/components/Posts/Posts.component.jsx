import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Card from "../Card";

export default function Posts() {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          skip: 1
          limit: 4
          sort: { order: DESC, fields: frontmatter___date }
          filter: { frontmatter: { lang: { eq: "es" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                img
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
    <div className="post-container">
      {edges.map((post) => (
        <Card {...post} key={post.node.id} />
      ))}
    </div>
  );
}
