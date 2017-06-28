import * as React from 'react';
import { Container, Box, Nav, NavLeft, NavItem, Title } from 'bloomer';
import { Footer, ComicCardList } from '../../components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { ComicStore } from '../../stores/ComicStore';
import { style } from 'typestyle';

interface MarvelAppProps {
  comicStore?: ComicStore;
}

const minWindowHeight = style({ display: 'flex', flexDirection: 'column', minHeight: '100vh' });

@inject('comicStore')
@observer
export class MarvelApp extends React.Component<MarvelAppProps, {}> {

  render() {
    return (
      <Container isFullWidth isPaddingless isMarginless className={minWindowHeight}>
        <Router>
          <Box className={minWindowHeight}>
            <Nav className={style({padding: '1rem 2rem', backgroundColor: '#46454A', color: '#fff'})}>
              <NavLeft>
                <NavItem><Title tag="h1" isSize={3}>Marvel App</Title></NavItem>
              </NavLeft>
            </Nav>
            <Switch>
              <Route path="/" render={props => <ComicCardList store={this.props.comicStore!} {...props} />} />
            </Switch>
            <Footer />
          </Box>
        </Router>
      </Container>
    );
  }

}