import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MarvelApp} from './components';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MarvelApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
