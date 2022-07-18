import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

  @font-face {
    font-family: "cera_problack";
    src: url('/fonts/CeraPro/cera_pro_black-webfont.woff2') format("trueType");
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "cera_prolight";
    src: url('/fonts/CeraPro/cera_pro_light-webfont.woff2') format("trueType");
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "cera_promedium";
    src: url('/fonts/CeraPro/cera_pro_medium-webfont.woff2') format("trueType");
    font-weight: normal;
    font-display: swap;
  }
  
  html,
  body{
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: 'cera_promedium', 'cera_problack', 'cera_prolight';
    font-weight: 400;
    font-size: 1vw;

    @media screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
  }

  *{
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 50%;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7165E3;
  }

  @media screen and (max-width: 640px) {
    ::-webkit-scrollbar {
    width: 1px;
  }
  }

`;
export default GlobalStyles;
