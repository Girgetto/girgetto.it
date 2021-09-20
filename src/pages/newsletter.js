import React from "react";

import Layout from "../layout";
import * as Components from "../components";
import { useStaticQuery, graphql } from "gatsby";
import Card from '../templates/Card';

const Newsletter = ({ location }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
      <Components.SEO title="Newsletter" />
      <div className="post-container">
        {edges.map((post) => (
          <Card {...post} key={post.node.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Newsletter;
