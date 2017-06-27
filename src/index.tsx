import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MarvelApp } from './components';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'mobx-react';
import { ComicStore } from './stores/ComicStore';

injectTapEventPlugin();

const stores = { comicStore: new ComicStore() };

ReactDOM.render(
  <Provider {...stores}>
    <MarvelApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
