import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Button from "./Button";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>,
  rootElement
);
