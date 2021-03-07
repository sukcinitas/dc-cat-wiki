import React from 'react';

import Heading from './Heading';
import Paragraph from './Paragraph';
import '../sass/CatCard.scss';

const CatCard = ({ index, url, name, description }:  { index: number, url: string, name: string, description: string }) => {
  return (
    <div className="cat-card">
      <img src={url} className="cat-card__image" />
      <div className="cat-card__info">
        <Heading type="small">{`${index}. ${name}`}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default CatCard;