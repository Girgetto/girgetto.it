import React from "react";

const Links = [
  {
    name: "Github",
    link: "https://github.com/girgetto",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/girgettoIT",
  },
  {
    name: "dev.to",
    link: "https://dev.to/girgetto",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/girgetto.it",
  },
];

const LinkComponent = ({ link, name }) => (
  <a href={link} className="link">
    {name}
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="social-links">
      {Links.map((link, index) => (
        <LinkComponent key={index} {...link} />
      ))}
    </div>
    <p>Powered by Gatsby & Github</p>
  </footer>
);

export default Footer;
