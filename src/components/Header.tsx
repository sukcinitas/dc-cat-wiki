import React from 'react';
import { useHistory } from 'react-router-dom';

import image from '../assets/CatwikiLogo.svg';
import '../sass/Header.scss';

const Header = () => {
  const history = useHistory();
  return (
  <header className="header">
    <img 
      onClick={() => history.push('/')}
      className="header__logo" 
      src={image} 
      alt="Title CatWiki and a cat beside"></img>
  </header>
)
};

export default Header;