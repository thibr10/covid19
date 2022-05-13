import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './Commons/Styles/Global-Style'
import Main from './Containers/Main/index'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
      <div>
        Teste
      </div>
    </StylesProvider>
  );
}

export default App;
