/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

const App = () => {

  return (
    <>
      <Navbar />

      <div className="container">
        <Home />
        <Skills />
      </div>

    </>
  );
};

export default App;

