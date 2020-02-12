import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
