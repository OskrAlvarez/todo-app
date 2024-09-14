import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --bgBody: #e4e5f1;
    --bgFont: #484b6a;
    --bgContainer: #fff;
    --bgBorder: #d2d3db;
    --TodoFontColor: #484b6a;
    --buttonColor: #d2d3db;
    --placeHolderColor: #9394a5;
    --veryDarkGrayishBlue: #484b6a;
    --imageHeaderDesk: url('./bg-desk-l.jpg'); 
    --imageHeaderMobile: url('./bg-mobile-l.jpg'); 
  }

  *,*::after,*::before {
    box-sizing: border-box;
  }

  html {
    box-sizing: inherit;
    margin: 0;
    font-family: ${({theme}) => theme.fontFamily};
    background-color: var(--bgBody);
    color: var(--bgFont);
    transition: all .5s ease-in;
  }

  html.dark {
    --bgBody: #161722;
    --bgFont: #cacde8;
    --bgContainer: #25273c;
    --bgBorder: #4d5066;
    --TodoFontColor: #bababa;
    --buttonColor: #d2d3db;
    --placeHolderColor: #9394a5;
    --veryDarkGrayishBlue: #484b6a; 
    --imageHeaderDesk: url('./bg-desk-dark.jpg'); 
    --imageHeaderMobile: url('./bg-mobile-dark.jpg');
    transition: all .5s ease-in;
  }

  body {
    margin: 0;
  }

  input, button {
    font-family: ${({theme}) => theme.fontFamily};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  

`

export default GlobalStyles