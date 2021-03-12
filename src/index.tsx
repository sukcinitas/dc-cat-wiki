import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import App from './App';

const location = window.location.href === 'http://localhost:4000' ? 'http://localhost:4000' : 'https://resolute-wry-objective.glitch.me';
axios.defaults.baseURL = location;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);