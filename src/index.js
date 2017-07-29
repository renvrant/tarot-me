import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.css';
import App from './root/components/App/App';
import registerServiceWorker from './root/services/registerServiceWorker';
import { Provider } from 'react-redux';
import {store} from './root/store/configure-store/root.store';

// eslint-disable-next-line
import { polyfills } from './polyfills';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();




