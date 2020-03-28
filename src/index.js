import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
