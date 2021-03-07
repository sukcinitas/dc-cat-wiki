import React from 'react';

import image from '../assets/CatwikiLogo.svg';
import '../sass/Header.scss';

const Header = () => (
  <div className="header">
    <img className="header__logo" src={image} alt="Title CatWiki and a cat beside"></img>
  </div>
);

export default Header;