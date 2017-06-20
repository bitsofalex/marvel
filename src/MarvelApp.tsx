import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavBar} from './components';

class MarvelApp extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MarvelApp;
