import "babel-polyfill";
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
//components:
import App from './App';


ReactDOM.render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>
  ,document.getElementById("root")
);

serviceWorker.unregister();
