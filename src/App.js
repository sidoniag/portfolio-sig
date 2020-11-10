import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Box } from '@chakra-ui/core';

function App() {
  const [categories] = useState([
    { name: "about me", href: "about" },
    { name: "portfolio", href: "a few of my projects" },
    { name: "contact", description: "ways to reach out to me" },
    { name: "resume", href: "resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const renderPage = () => {
//     switch (currentCategory.name) {
//       case "portfolio":
//         return <Portfolio />;
//       case "contact":
//         return <Contact />;
//       case "resume":
//         return <Resume />;
//       default:
//         return <About />;
//     }
//   };

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//       ></Nav>
//       <Header></Header>
//       <main>{renderPage()}</main>
//       <Footer></Footer>
//     </div>
//   );
// }

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <Header></Header>
      <main>
        <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
