import "./Footer.css";
import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/andy-bayer-203/"
      >
        <img
          className="social-links"
          src="https://i.imgur.com/0WzBM5Y.png"
          alt="linked-in"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/arbayer4">
        {" "}
        <img
          className="social-links"
          src="https://i.imgur.com/hCulubQ.png"
          alt="github"
        />
      </a>
      <p>© Andy Bayer 2021</p>
    </footer>
  );
}

export default Footer;
