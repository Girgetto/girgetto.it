import React from "react";

const Card = ({ node }) => {
  return (
    <div className="card">
      <img alt="posts" loading="lazy" id="image" src="" />
      <header className="description">
        <h5>{node.frontmatter.title}</h5>
        <p>
          {node.frontmatter.description}
        </p>
        <button>
          Learn more
        </button>
      </header>
    </div>
  );
};

export default Card;
