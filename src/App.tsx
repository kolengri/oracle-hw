import React from 'react';

import { StoreProvider } from 'easy-peasy';

import { store } from './store';

import { Home } from './pages';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Home />
      </div>
    </StoreProvider>
  );
};

export default App;
