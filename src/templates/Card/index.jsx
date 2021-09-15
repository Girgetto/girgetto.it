import React from "react";

const Card = ({ node }) => {
  return (
    <div className="card" key={node.id}>
      <img
        alt="posts"
        loading="lazy"
        id="image"
        src={
          node.frontmatter.image ||
          "https://res.cloudinary.com/practicaldev/image/fetch/s--IgWkwrvX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3n3lw4nkuhfd413e8yhs.png"
        }
      />
      <header className="description">
        <h5>{node.frontmatter.title}</h5>
        <p>{node.frontmatter.description}</p>
        <button>Learn more</button>
      </header>
    </div>
  );
};

export default Card;
