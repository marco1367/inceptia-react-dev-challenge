import "babel-polyfill";
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';
//store:
import store from "./redux/store";
//components:
import App from './App';


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </Provider>
  ,document.getElementById("root")
);

serviceWorker.unregister();
