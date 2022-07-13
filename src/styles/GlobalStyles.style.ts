import styled, { createGlobalStyle } from "styled-components";
import CeraPro from "/fonts/CeraPro/stylesheet.css";

const GlobalStyles = createGlobalStyle` 

  @font-face {
    font-family: "Cera Pro";
    src: url('/fonts/Cera_Pro/stylesheet.css') format("woff2");
    font-display: swap;
  }

  
  html,
  body{
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
