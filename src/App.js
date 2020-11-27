import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <Navbar />
      <About />
      <Portfolio />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;
