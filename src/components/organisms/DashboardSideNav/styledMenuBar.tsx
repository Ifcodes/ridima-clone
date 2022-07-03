import styled, { css, keyframes } from "styled-components";

export const SideNavWrapper = styled.aside<{
  logout?: boolean;
  collapse?: boolean;
}>`
  width: ${(props) => (props.collapse ? "5rem" : "100%")};
  background: linear-gradient(
      0deg,
      rgba(113, 101, 227, 0.05),
      rgba(113, 101, 227, 0.05)
    ),
    #ffffff;
  padding: ${(props) => (props.collapse ? "" : "1rem 1.5rem")};
  height: 100vh;
  overflow: auto;
  position: relative;
  transition: 0.5s ease-out;

  .logo-cont {
    width: 100%;
    background: linear-gradient(
        0deg,
        rgba(113, 101, 227, 0.05),
        rgba(113, 101, 227, 0.05)
      ),
      #ffffff;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;
    position: sticky;
    top: -1rem;
    left: 0;

    .arrow {
      cursor: pointer;
      transform: ${(props) => (props.collapse ? "rotate(180deg)" : "")};
    }
  }

  .menu-items {
    width: 100%;
    margin-top: 2rem;

    .menu {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: ${(props) => (props.collapse ? "1rem" : "")};
    }
  }

  .secondary {
    margin-top: 0;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
