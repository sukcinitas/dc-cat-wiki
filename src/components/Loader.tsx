import React from "react";
import ReactDOM from "react-dom";

import "../sass/Loader.scss";

const Loader = () =>
  ReactDOM.createPortal(
    <div className="loader">
      <div className="loader__dots">
        <span className="material-icons loader__dot loader__dot-1">pets</span>
        <span className="material-icons loader__dot loader__dot-2">pets</span>
        <span className="material-icons loader__dot loader__dot-3">pets</span>
        <span className="material-icons loader__dot loader__dot-4">pets</span>
      </div>
    </div>,
    document.body
  );

export default Loader;
