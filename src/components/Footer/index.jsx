import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="social-links">
      <a className="link">Github</a>
      <a className="link">Twitter</a>
    </div>
    <p>Powered by Gatsby & Github</p>
  </footer>
);

export default Footer;
