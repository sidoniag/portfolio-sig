import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {

    return (
      <div className="main"
         maxWidth="90%">
        <Navbar/>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
   
      </div>

    );
  }


export default App;