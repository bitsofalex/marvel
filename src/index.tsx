import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MarvelApp } from './components';
import registerServiceWorker from './registerServiceWorker';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'mobx-react';
import { ComicStore } from './stores/ComicStore';

import 'bulma/css/bulma.css';

injectTapEventPlugin();

const stores = { comicStore: new ComicStore() };

ReactDOM.render(
  <Provider {...stores}>
    <MarvelApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
