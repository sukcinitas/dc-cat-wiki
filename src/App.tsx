import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatPage from './pages/CatPage';
import PopularCatsPage from './pages/PopularCatsPage';
import './sass/App.scss';

const App = () => {
  return (
    <div className="main"> 
      <Router>
        <Route component={Header} />
          <Switch>
            <Route path="/most-popular-breeds" component={PopularCatsPage}/>
            <Route path="/breeds/:breedId" component={CatPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        <Route component={Footer} />
      </Router>
    </div>
  )
};

export default App;