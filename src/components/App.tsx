import React from "react";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Experience from "./Pages/Experience";
import Scholarship from "./Pages/Scholarship";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import "../css/App.scss";

export function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Experience />
      <Scholarship />
      <Projects />
      <Contact />
    </div>
  );
}
