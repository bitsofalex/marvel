import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MarvelApp from './MarvelApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MarvelApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
