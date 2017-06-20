import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavBar} from '../NavBar';

export class MarvelApp extends React.Component<{}, {}> {
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