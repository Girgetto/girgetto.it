import React from "react";
import { Link } from "gatsby";

const Card = ({ node }) => {
  return (
    <div className="card">
      <Link to={node.fields.slug}>
        <header className="description">
          <div className="section">
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
          </div>
        </header>
      </Link>
    </div>
  );
};

export default Card;
