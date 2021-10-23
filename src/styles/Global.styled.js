/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');


body {
  overflow-x       : hidden;
  font-size        : 15px;
  padding          : 0;
  margin           : 0;
  font-family: 'Open Sans', sans-serif;
}

a {
  color          : inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
