import React from "react";

import rectangle from '../../images/rectangle.png'

const Card = ({ node }) => {
  return (
    <div className="card" key={node.id}>
      <img alt="posts" loading="lazy" id="image" src={node.frontmatter.image || rectangle} />
      <header className="description">
        <div className="section">
          <h5>{node.frontmatter.title}</h5>
          <p>{node.frontmatter.description}</p>
        </div>
        <button>Learn more</button>
      </header>
    </div>
  );
};

export default Card;
