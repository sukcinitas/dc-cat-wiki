import React from 'react';
import { useHistory } from "react-router-dom";

import Heading from './Heading';
import Paragraph from './Paragraph';
import '../sass/CatCard.scss';

const CatCard = ({ id, index, url, name, description, cb }:  { id:string, index: number, url: string, name: string, description: string, cb: () => void }) => {
  const history = useHistory();

  return (
    <div className="cat-card">
      <img onLoad={cb} src={url} className="cat-card__image" onClick={() => history.push(`/breeds/${id}`)} />
      <div className="cat-card__info">
        <Heading cb={() => history.push(`/breeds/${id}`)} type="small">{`${index}. ${name}`}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default CatCard;