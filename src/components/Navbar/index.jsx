import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const links = [
  { link: "/", name: "Latest" },
  { link: "/newsletter", name: "Newsletter" },
  { link: "/podcast", name: "Podcast" },
];

const Navbar = ({ location }) => (
  <header className="flex" id="header" role="banner">
    <a href="https://girgetto.it">
      <h1>girgetto.it</h1>
    </a>
    <nav id="links" className="flex">
      {links.map(({ link, name }) => (
        <Link
          key={link}
          to={link}
          className={"link" + (location.pathname === link ? " is-selected" : "")}
        >
          {name}
        </Link>
      ))}
    </nav>
  </header>
);

export default Navbar;

Navbar.propTypes = {
  location: PropTypes.shape(),
};
