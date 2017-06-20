import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const logo = require('./logo.svg');

class MarvelApp extends React.Component<{}, null> {
  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
            </MuiThemeProvider>
    );
  }
}

export default MarvelApp;
