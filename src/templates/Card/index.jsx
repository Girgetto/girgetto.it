import React from "react";
import { Link } from "gatsby";

import rectangle from "../../images/rectangle.png";

const Card = ({ node }) => {
  return (
    <div className="card">
      <img alt="posts" loading="lazy" id="image" src={rectangle} />
      <header className="description">
        <div className="section">
          <h5>{node.frontmatter.title}</h5>
          <p>{node.frontmatter.description}</p>
        </div>
        <Link to={node.fields.slug}>
          <button>Learn more</button>
        </Link>
      </header>
    </div>
  );
};

export default Card;
