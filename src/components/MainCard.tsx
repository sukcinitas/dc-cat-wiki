import React from 'react';

import image from '../assets/CatwikiLogoWhite.svg';
import SearchBar from './SearchBar';
import Heading from './Heading';
import Button from './Button';
import '../sass/MainCard.scss';

const MainCard = () => {
  return (
    <div className="main-card">
      <section className="main-card__top-section">
        <img src={image} className="main-card__logo" />
        <p className="main-card__text">Get to know more about your cat breed</p>
        <SearchBar />
      </section>
      <section className="main-card__bottom-section">
        <p className="main-card__additional">Most Searched Breeds</p>
        <div className="main-card__wrapper">
          <Heading>66+ Breeds for you to discover</Heading>
          <Button>See more</Button>
        </div>
        <div className="main-card__cat-row">
          <div className="main-card__cat-row-element">
            <img className="main-card__cat-row-image"></img>
            <p className="main-card__cat-row-text">Vardas</p>
          </div>  
          <div className="main-card__cat-row-element">
            <img className="main-card__cat-row-image"></img>
            <p className="main-card__cat-row-text">Vardas</p>
          </div> 
          <div className="main-card__cat-row-element">
            <img className="main-card__cat-row-image"></img>
            <p className="main-card__cat-row-text">Vardas</p>
          </div> 
          <div className="main-card__cat-row-element">
            <img className="main-card__cat-row-image"></img>
            <p className="main-card__cat-row-text">Vardas</p>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default MainCard;