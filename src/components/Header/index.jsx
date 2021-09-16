import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import rectangle from "../../images/rectangle.png";

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
      <div className="header-img">
        <img alt="main-post" src={rectangle} />
      </div>
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
