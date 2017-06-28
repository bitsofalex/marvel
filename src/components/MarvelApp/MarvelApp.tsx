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

const isFullScreenClass = style({ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' });

@inject('comicStore')
@observer
export class MarvelApp extends React.Component<MarvelAppProps, {}> {

  render() {
    return (
      <Container
        isPaddingless={true}
        isMarginless={true}
        className={isFullScreenClass}
      >
        <Router>
          <Box className={isFullScreenClass} isPaddingless={true}>
            <Nav className={style({ backgroundColor: '#46454A' })}>
              <NavLeft>
                <NavItem>
                  <Title tag="h1" isSize={3} className={style({ color: '#fff' })}>Marvel App</Title>
                </NavItem>
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