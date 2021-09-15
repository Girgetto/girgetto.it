import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img loading="lazy" id="image" src="" />
      <header className="description">
        <h5>Heading</h5>
        <p>
          Write an amazing description in this dedicated card section. Each word
          counts...{" "}
        </p>
        <button>
          Learn more
        </button>
      </header>
    </div>
  );
};

export default Card;
