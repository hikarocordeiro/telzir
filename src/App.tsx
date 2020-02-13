import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Routes from './routes'

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <Routes />
  </Provider>
);

export default App;
