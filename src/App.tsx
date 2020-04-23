import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Wizard from './features/Wizard/Wizard';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bc8044',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Wizard />
      </div>
    </ThemeProvider>
  );
}

export default App;
