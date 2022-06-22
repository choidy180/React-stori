import React from 'react';
import { useRecoilValue } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import { isDarkAtom } from './atom';
import Router from './Router';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    html{
      min-width: 100vw;
      min-height: 100vh;
    }
    body {
      font-family: 'NEXON Lv1 Gothic OTF';
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.textColor};
      min-width: 100vw;
      min-height: 100vh;
    }
  }
`

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;
