import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background-color: ${theme.backgroundColor};
    display: flex;
    color: ${theme.primaryBlack};
    max-width: 1280px;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;
