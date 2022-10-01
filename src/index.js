import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledGlobal } from "./styles/global";
import { StyledReset } from "./styles/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledReset />
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
