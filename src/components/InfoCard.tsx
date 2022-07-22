import React from "react";
import { useHistory } from "react-router-dom";

import "../sass/InfoCard.scss";

import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const InfoCard = ({ cb }: { cb: () => void }) => {
  const history = useHistory();
  return (
    <div className="info-card">
      <section className="info-card__info">
        <Heading type="with-line">Why should you have a cat?</Heading>
        <Paragraph>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </Paragraph>
        <Button cb={() => history.push("/about")}>Read more</Button>
      </section>
      <div className="info-card__pic-wrapper">
        <img onLoad={cb} src={image2} className="info-card__pic--1" />
      </div>
      <div className="info-card__pic-wrapper">
        <img onLoad={cb} src={image3} className="info-card__pic--2" />
      </div>
      <div className="info-card__pic-wrapper">
        <img onLoad={cb} src={image1} className="info-card__pic--3" />
      </div>
    </div>
  );
};

export default InfoCard;
