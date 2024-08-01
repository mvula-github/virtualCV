/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const App = () => {

  return (
    <>
      <Navbar />

      <div className="container">
        <Home />
        <Skills />
        <Work />
      </div>
    </>
  );
};

export default App;

