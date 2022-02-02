import GlobalStyles from './box/global'
import Header from './components/header'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { baseTheme } from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
