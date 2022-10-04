import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./pages";
import App from "./pages/App";

/*
index.js disini sebagai entry point, yang mana tugasnya adalah untuk menginjeksi sebuah komponent react kedalam index.html dengan element id "root"
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
