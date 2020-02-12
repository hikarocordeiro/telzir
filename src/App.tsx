import React from 'react';

import Routes from './routes'

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Routes />
  </>
);

export default App;
