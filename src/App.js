import React, { Component } from 'react';
import './App.css';
import { version as appVersion } from '../package.json';
import AppBody from './components/AppBody';
import { Helmet } from 'react-helmet';
import { Navbar } from 'react-bootstrap/lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title={'MHGuPB - ' + appVersion}>
          <meta charSet="utf-8" />
          <link href="/fontawesome/fontawesome-all.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Helmet>
        <Navbar inverse>
          <Navbar.Toggle />
          <Navbar.Header>
            <Navbar.Brand>
              MHG<span style={{fontSize:'50%'}}>U</span> Palico Builder - {appVersion}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <AppBody />
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
