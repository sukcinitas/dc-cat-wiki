import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

declare const __PRODUCTION__: boolean;
axios.defaults.baseURL = "http://localhost:4000/";
if (__PRODUCTION__) {
  axios.defaults.baseURL = "https://dc-cat-wiki-api.onrender.com/";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
