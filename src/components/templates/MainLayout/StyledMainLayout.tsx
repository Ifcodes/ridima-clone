import styled from "styled-components";

export const LayoutWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 18% 1fr;
  overflow: hidden;

  main{
    max-width: 100%;
    position: relative;
  }
`