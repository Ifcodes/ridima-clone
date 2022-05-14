import styled, { createGlobalStyle } from "styled-components";
import CeraPro from '/fonts/CeraPro/stylesheet.css'

const GlobalStyles = createGlobalStyle` 

  @font-face {
    font-family: "Cera Pro";
    src: url('/fonts/CeraPro/stylesheet.css') format("truetype");
  }

  
  html,
  body{
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: "Cera Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
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
`
export default GlobalStyles