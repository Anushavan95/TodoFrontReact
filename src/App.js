import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
export default function App(props) {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
