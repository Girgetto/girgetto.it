import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import About from './components/about/about.jsx';
import Projects from './components/projects/projects.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import React from 'react';

console.log('(̲̅G̲̅)(̲̅i̲̅)(̲̅o̲̅)(̲̅r̲̅)(̲̅g̲̅)(̲̅i̲̅)(̲̅o̲̅) (̲̅G̲̅)(̲̅r̲̅)(̲̅a̲̅)(̲̅s̲̅)(̲̅s̲̅)(̲̅i̲̅)(̲̅n̲̅)(̲̅i̲̅)))');

const  App = () => (
  <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
);

export default App;
