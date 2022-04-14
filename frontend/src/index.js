import "babel-polyfill";
import "react-app-polyfill/ie11";

import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  "Welcome to Inceptia ReactJS Challenge",
  document.getElementById("root")
);

serviceWorker.unregister();
