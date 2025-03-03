/* eslint-disable no-unused-vars */

import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {

  return (
    <>
      <Navbar />

      <div className="container">
        <Home />
        <AboutMe />
        <Skills />
        <Work />
        <ContactMe />
      </div>
      
      <Footer/>
    </>
  );
};

export default App;

