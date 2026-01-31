import React from "react";
import { useNavigate } from "react-router-dom";

import Image from "./Image";
import image from "../assets/CatwikiLogo.svg";
import "../sass/Header.scss";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Button cb={() => navigate("/")} classes={["header__logo"]}>
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
