import React, { Component } from 'react';
import './App.css';
import { version as appVersion } from '../package.json';
import AppBody from './components/AppBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="palico.png" className="App-logo" alt="palico" />
          <h1 className="App-title">MHG<span style={{fontSize:'50%'}}>U</span> Palico Builder - {appVersion}</h1>
        </header>
        <p className="App-intro"></p>
        <AppBody />
      </div>
    );
  }
}

export default App;
