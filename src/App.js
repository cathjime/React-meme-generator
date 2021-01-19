import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import MemeGenerator from "./Containers/MemeGenerator";

function App() {
  return (
    <>
      <Header />
      <MemeGenerator />
    </>
  );
}

export default App;
