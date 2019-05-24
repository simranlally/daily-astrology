import React from 'react';
import jimmy from './princeofconcordia.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jimmy} className="App-logo" alt="logo" />
        <p>
          I deadass set the front end up for you bums.
        </p>
        <a
          className="App-link"
          href="https://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show Sim BootStrap or Material-UI for styled React Components.
        </a>
      </header>
    </div>
  );
}

export default App;
