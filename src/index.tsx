import React from 'react';

import { StoreProvider } from 'easy-peasy';
import ReactDOM from 'react-dom';

import App from './App';
import { ROOT_ID } from './config';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import './styles/base.css';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const rootElement = document.getElementById(ROOT_ID);

const render = (Component: React.FC) => {
  return ReactDOM.render(
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>,
    rootElement
  );
};

// Initial App render
render(App);

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
