import React from "react";

import Layout from "../layout";
import * as Components from "../components";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/Card";

const Newsletter = ({ location }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { lang: { eq: "es" }, type: { eq: "post"} } }
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
