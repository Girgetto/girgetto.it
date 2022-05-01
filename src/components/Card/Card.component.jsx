import React from "react";
import { Link } from "gatsby";

import rectangle from "../../images/rectangle.png";

const Card = ({ node }) => {
  return (
    <Link to={node.fields.slug}>
      <div className="card">
        <header className="description">
          <div className="section">
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
          </div>
        </header>
      </div>
    </Link>
  );
};

export default Card;
