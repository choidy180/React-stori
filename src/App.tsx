import React from 'react';
import { useRecoilValue } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import { darkTheme, lightTheme } from './enum/ThemeEnums';
import { isDarkAtom } from './recoil/theme';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * {
    box-sizing: border-box;
    position: relative;
    padding: 0;
    margin: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
    transition: .2s background ease-in-out
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
