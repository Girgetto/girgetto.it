import React from "react";

import Layout from "../layout";
import * as Components from "../components";
import Card from "../templates/Card";
import { useStaticQuery, graphql } from "gatsby";

const Podcast = ({ location }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "podcast" } } }
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
    <Layout location={location}>
      <Components.SEO title="Podcast" />
      <div className="post-container">
      {edges.map((post) => (
        <Card {...post} key={post.node.id} />
      ))}
      </div>
    </Layout>
  );
};

export default Podcast;
