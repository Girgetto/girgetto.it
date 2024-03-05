import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Header = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 1, sort: { frontmatter: { date: DESC } }) {
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
      <Link to={post.node.fields.slug}>
        <article className="article">
          <h2 className="main-title">{post.node.frontmatter.title}</h2>
          <p className="main-description">
            {post.node.frontmatter.description}
          </p>
        </article>
      </Link>
    </header>
  );
};

export default Header;
