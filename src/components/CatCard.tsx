import React from "react";
import { useHistory } from "react-router-dom";

import Heading from "./Heading";
import Image from "./Image";
import Paragraph from "./Paragraph";
import "../sass/CatCard.scss";
import Button from "./Button";

const CatCard = ({
  id,
  index,
  url,
  name,
  description,
}: {
  id: string;
  index: number;
  url: string;
  name: string;
  description: string;
}) => {
  const history = useHistory();

  return (
    <div className="cat-card">
      <Button
        cb={() => history.push(`/breeds/${id}`)}
        classes={["cat-card__image-btn", "relative"]}
      >
        <Image src={url} classes={["cat-card__image"]} />
      </Button>
      <div className="cat-card__info">
        <Heading
          cb={() => history.push(`/breeds/${id}`)}
          type="small"
        >{`${index}. ${name}`}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default CatCard;
