import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Porfolio from "./components/portfolio/Porfolio";
import Contact from "./components/contact/Contact";
import TopBtn from './components/topBtn/TopBtn'

const App = () => {
  return (
    <>
    <TopBtn/>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About/>
      </section>
      <section id="Skills">
        <Skills/>
      </section>
      <Porfolio/>
      <section id="Contact">
        <Contact/>
      </section>
    </>
  );
};

export default App;
