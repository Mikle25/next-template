import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
  }
  body {
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
