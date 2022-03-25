import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

   ${reset}

    body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Noto Sans KR', sans-serif;
  }
    
`;

export default GlobalStyle;
