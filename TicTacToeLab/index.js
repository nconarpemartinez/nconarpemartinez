import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TicTacToeMain from "./TicTacToeMain";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TicTacToeMain />
  </StrictMode>
);
