// import React, { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Nav from './components/Nav';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Portfolio from './components/Portfolio';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
// import { Box } from '@chakra-ui/core';

// function App() {
//   const [categories] = useState([
//     { name: "about me", href: "#About" },
//     { name: "portfolio", href: "#Portfolio" },
//     { name: "contact", description: "#Contact" },
//     { name: "resume", href: "#Resume" },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//       ></Nav>
//       <main>
        
//         <About></About>
//       <Portfolio></Portfolio>
//       <Contact></Contact>
//       <Resume></Resume>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Nav data={this.state.resumeData.nav}/>
        <div className="main"
        maxWidth="90%">
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
      </div>
    );
  }
}

export default App;