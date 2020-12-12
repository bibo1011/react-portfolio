import React from 'react';
import About from './components/About';
// import Project from './components/Project';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <div>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
