import React from 'react';
import GlobalStyles from './box/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from './theme/theme'
import Home from './pages/home';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
