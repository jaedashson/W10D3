import React from "react";
import ReactDOM from "react-dom";

import Game from "./game"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game gridSize={9} numBombs={4}/>, root);
  // ReactDOM.render(<p>Hello!!!</p>, root);
});