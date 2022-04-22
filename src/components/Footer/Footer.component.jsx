import React from "react";
import Links from "../../common/links";

const LinkComponent = ({ link, name }) => (
  <a href={link} className="link">
    {name}
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="social-links">
      {Object.values(Links).map((link, index) => (
        <LinkComponent key={index} {...link} />
      ))}
    </div>
    <p>Powered by Gatsby & Github</p>
  </footer>
);

export default Footer;
