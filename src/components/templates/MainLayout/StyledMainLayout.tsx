import styled from "styled-components";

export const LayoutWrapper = styled.section<{ padding?: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: 18% 1fr;
  overflow: hidden;

  main {
    max-width: 100%;
    height: 100vh;
    position: relative;

    .child-cont {
      width: 100%;
      height: 100%;
      padding: ${(props) => props.padding || "2rem 3.75rem 0"};
      overflow: auto;
    }
  }
`;
