import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Home from '../main/components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yoooo</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Home />
        </p>
      </div>
    );
  }
}

export default App;
