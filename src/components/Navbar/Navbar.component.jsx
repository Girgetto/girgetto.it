import React from "react";
import { Link } from "gatsby";
import SocialLinks from "../../common/SocialLinks";

const links = [
  { link: "/", name: "Latest" },
  { link: "/newsletter", name: "Newsletter" },
  { link: "/podcast", name: "Podcast" },
];

const Navbar = ({ location }) => (
  <header className="flex" id="header" role="banner">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "256px",
        width: "100%",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://avatars.githubusercontent.com/u/33903092?v=4"
          alt="girgetto_foto"
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
        <h1 style={{ marginLeft: "12px" }}>girgetto.it</h1>
      </Link>
    </div>
    <nav id="links" className="flex">
      {links.map(({ link, name }) => (
        <Link
          key={link}
          to={link}
          className={
            "link" + (location.pathname === link ? " is-selected" : "")
          }
        >
          {name}
        </Link>
      ))}
    </nav>
    <div className="social">
      {Object.values(SocialLinks).map((link, i) =>
        link.icon ? (
          <a key={i} href={link.link} rel="noreferrer" target="_blank">
            {link.icon}
            {link.name}
          </a>
        ) : null
      )}
    </div>
  </header>
);

export default Navbar;
