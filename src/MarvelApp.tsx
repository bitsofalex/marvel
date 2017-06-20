import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavBar} from './components';
import './App.css';

class MarvelApp extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MarvelApp;
