import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="bottom-container">
      <a
        className="instafooter-link"
        href="https://www.instagram.com/_bhagyashribhavsar_/"
      >
        Instagram
      </a>
      <a
        className="officialfooter-link"
        href="https://www.instagram.com/bks.crafts23/"
      >
        Official
      </a>
      <a
        className="websitefooter-link"
        href="https://bkscrafts.github.io/BKSCrafts/"
      >
        Website
      </a>
      <p className="copyright">© 2019 BKS Crafts </p>
    </div>
  );
}

export default Footer;
