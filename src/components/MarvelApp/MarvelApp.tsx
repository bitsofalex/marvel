import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as config from '../../config/config';
import { NavBar, Footer, ComicCardList } from '../../components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ComicStore } from '../../stores/ComicStore';
import { style } from 'typestyle';

interface MarvelAppProps {
  comicStore?: ComicStore;
}

const appClass = style({ display: 'flex', flexDirection: 'column', minHeight: '100vh' });

@inject('comicStore')
@observer
export class MarvelApp extends React.Component<MarvelAppProps, {}> {

  render() {
    return (
      <MuiThemeProvider muiTheme={config.customTheme}>
        <Router>
          <div className={appClass}>
            <NavBar />
            <Switch>
              <Route path="/" render={props => <ComicCardList store={this.props.comicStore!} {...props} />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

}