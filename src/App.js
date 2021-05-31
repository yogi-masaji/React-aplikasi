import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(props) {
  return <div>{props.kata}</div>
  
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld kata="heloooooo" />
        <p>
          Hello world!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
