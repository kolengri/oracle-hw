import React from 'react';

import { StoreProvider } from 'easy-peasy';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const render = (Component: React.FC) => {
  return ReactDOM.render(
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>,
    document.getElementById('root')
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
