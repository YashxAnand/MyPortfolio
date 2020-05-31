import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import FootComponent from "./components/FootComponent";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        <FootComponent />
      </div>
    );
  }
}

export default App;
