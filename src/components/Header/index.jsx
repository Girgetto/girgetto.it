import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 1) {
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

  const [post] = edges;

  return (
    <header className="header row flex">
      <div className="header-img">
        <img alt="main-post"></img>
      </div>
      <article className="article">
        <h1>{post.node.frontmatter.title}</h1>
        <p>
          {post.node.frontmatter.description}
        </p>
      </article>
    </header>
  );
};

export default Header;
