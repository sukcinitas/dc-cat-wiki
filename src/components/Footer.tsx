import React from "react";

import image from "../assets/CatwikiLogoWhite.svg";
import "../sass/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <img
      className="footer__logo"
      src={image}
      alt="Title CatWiki and a cat beside"
    ></img>
    <p className="footer__content">
      <span className="footer__icon">&#169;</span> created by{" "}
      <a
        className="footer__link"
        href="https://github.com/sukcinitas"
        target="_blank"
        rel="noreferrer noopener"
      >
        <b>sukcinitas</b>
      </a>
      {" - "}
      <a
        className="footer__link footer__link--not-underlined"
        href="https://devchallenges.io"
        target="_blank"
        rel="noreferrer noopener"
      >
        devChallenges.io 2021
      </a>
    </p>
  </footer>
);

export default Footer;
