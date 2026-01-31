import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import ReadMorePage from "./pages/ReadMorePage";
import PopularCatsPage from "./pages/PopularCatsPage";
import "./sass/App.scss";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/most-popular-breeds" element={<PopularCatsPage />} />
          <Route path="/breeds/:breedId" element={<CatPage />} />
          <Route path="/about" element={<ReadMorePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
