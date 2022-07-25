import styled, { keyframes } from "styled-components";

const expand = keyframes`
  from{
    grid-template-columns: 7rem 1fr;
  }
  to{
    grid-template-columns: 20% 1fr;
  }
`;

const collapse = keyframes`
  from{
    grid-template-columns: 20% 1fr;
    transition: 0.5s ease-in-out;
  }
  to{
    grid-template-columns: 7rem 1fr;
  }
`;

export const LayoutWrapper = styled.section<{
  padding?: string;
  mobilePadding?: string;
  isCollapsed?: boolean;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ isCollapsed }) =>
    isCollapsed ? "7rem 1fr" : "20% 1fr"};
  transition: 1s ease-in-out;
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

  @media screen and (max-width: 1007px) {
    grid-template-columns: ${({ isCollapsed }) =>
      isCollapsed ? "8rem 1fr" : "20% 1fr"};
  }
  @media screen and (max-width: 640px) {
    display: block;
    main {
      .child-cont {
        max-width: 100%;
        padding: ${(props) => props.mobilePadding || "1.5rem"};
      }
    }
  }
`;
