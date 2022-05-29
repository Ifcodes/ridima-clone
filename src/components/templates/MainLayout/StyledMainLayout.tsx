import styled from "styled-components";

export const LayoutWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 18% 1fr;
  overflow: hidden;

  main{
    max-width: 100%;
    height: 80%;
    position: relative;

    .child-cont{
      width: 100%;
      height: 100%;
      padding: 2rem 3.75rem;
      overflow: auto;
    }
  }
`