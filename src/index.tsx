import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import App from "./App";

declare const __PRODUCTION__: boolean;
axios.defaults.baseURL = "http://localhost:4000/";
if (__PRODUCTION__) {
  axios.defaults.baseURL = "https://dc-cat-wiki-api.onrender.com/";
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
