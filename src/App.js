import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    { name: "about me", href: "about" },
    { name: "portfolio", href: "a few of my projects" },
    // { name: "contact", description: "ways to reach out to me" },
    // { name: "resume", href: "resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    switch (currentCategory.name) {
      case "portfolio":
        return <Portfolio />;
      // case "contact":
      //   return <Contact />;
      // case "resume":
      //   return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <Header></Header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
