import React from 'react';
import { AppRouter } from './components/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

const generateClassName = createGenerateClassName({ productionPrefix: 'c' })

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  )
};

export default App;
