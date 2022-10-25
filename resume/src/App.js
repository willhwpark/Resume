import React from 'react';
import Main from './components/Main';
import Background from './components/Background';
import Languages from './components/Language';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main />
      <Background />
      <Languages />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
