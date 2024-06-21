import React from "react";
import { useHistory } from "react-router-dom";

import Image from "./Image";
import image from "../assets/CatwikiLogo.svg";
import "../sass/Header.scss";
import Button from "./Button";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <Button cb={() => history.push("/")} classes={["header__logo"]}>
        <Image
          classes={["header__logo"]}
          src={image}
          alt="Title CatWiki and a cat beside"
          noLoader
        />
      </Button>
    </header>
  );
};

export default Header;
