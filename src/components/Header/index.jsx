import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import rectangle from "../../images/rectangle.png";

const Header = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 1
          sort: { order: DESC, fields: frontmatter___date }
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

  const [post] = edges;

  return (
    <header className="header row flex">
      <Link to={post.node.fields.slug}>
        <div className="header-img">
          <img
            className="main-post-img"
            alt="main-post"
            src={post.node.frontmatter.img || rectangle}
          />
        </div>
      </Link>
      <article className="article">
        <Link to={post.node.fields.slug}>
          <h1>{post.node.frontmatter.title}</h1>
        </Link>
        <p>{post.node.frontmatter.description}</p>
      </article>
    </header>
  );
};

export default Header;
