import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './root/App/App';
import registerServiceWorker from './services/registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

// eslint-disable-next-line
import { polyfills } from './polyfills';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();




