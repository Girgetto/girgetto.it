import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Header = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 1
          sort: { frontmatter: { date: DESC } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                img
                lang
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
    <header className="header row">
      <article className="article">
        <Link to={post.node.fields.slug}>
          <h2 className="main-title">{post.node.frontmatter.title}</h2>
        </Link>
        <p className="main-description">{post.node.frontmatter.description}</p>
      </article>
    </header>
  );
};

export default Header;
