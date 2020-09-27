import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "./context/MainContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MainProvider>
      <App />
    </MainProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
