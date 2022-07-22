import React from "react";
import { useHistory } from "react-router-dom";

import image from "../assets/CatwikiLogoWhite.svg";
import imageSmall from "../assets/CatwikiLogoSmall.svg";
import SearchBar from "./SearchBar";
import Heading from "./Heading";
import Button from "./Button";
import "../sass/MainCard.scss";

const MainCard = ({
  data,
  cb,
}: {
  data: Array<{ id: string; name: string; url: string }>;
  cb: () => void;
}) => {
  const history = useHistory();

  const list = data.map((cat: { id: string; name: string; url: string }) => (
    <div key={cat.id} className="main-card__cat-row-element">
      <div className="main-card__cat-row-wrapper">
        <span className="main-card__cat-row-detail"></span>
        <img
          onLoad={cb}
          onClick={() => history.push(`/breeds/${cat.id}`)}
          src={cat.url}
          className="main-card__cat-row-image"
        ></img>
      </div>
      <p className="main-card__cat-row-text">{cat.name}</p>
    </div>
  ));

  return (
    <div className="main-card">
      <section className="main-card__top-section">
        {/* <img onLoad={cb} src={image} className="main-card__logo" /> */}
        <picture>
          <source media="(min-width:550px)" srcSet={image} />
          <source media="(min-width:0px)" srcSet={imageSmall} />
          <img
            onLoad={cb}
            src={image}
            className="main-card__logo"
            alt="A cat"
          />
        </picture>
        <p className="main-card__text">Get to know more about your cat breed</p>
        <SearchBar />
      </section>
      <section className="main-card__bottom-section">
        <p className="main-card__additional">Most Searched Breeds</p>
        <div className="main-card__wrapper">
          <Heading>66+ Breeds for you to discover</Heading>
          <Button cb={() => history.push("/most-popular-breeds")}>
            See more
          </Button>
        </div>
        <div className="main-card__cat-row">{list}</div>
      </section>
    </div>
  );
};

export default MainCard;
