import styled, { css, keyframes } from "styled-components";

export const SideNavWrapper = styled.aside<{
  logout?: boolean;
  collapse?: boolean;
}>`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(113, 101, 227, 0.05),
      rgba(113, 101, 227, 0.05)
    ),
    #ffffff;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
  transition: 0.5s ease-in-out;

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
    padding: ${(props) => (props.collapse ? " 1rem" : "1.5rem 1.5rem 0")};
    position: sticky;
    top: -1rem;
    left: 0;

    .arrow {
      cursor: pointer;
      transform: ${(props) => (props.collapse ? "rotate(180deg)" : "")};
    }

    .logo {
      width: 70%;
    }

    svg {
      width: 100%;
    }
  }

  .menu-items {
    width: 100%;
    height: 90%;
    overflow-y: auto;
    margin-top: 1rem;
    padding: ${(props) => (props.collapse ? "" : "1rem 1.5rem")};
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu {
      width: 100%;
      max-width: ${(props) => (props.collapse ? "4.5rem" : "100%")};
      display: flex;
      align-items: center;
      margin-top: ${(props) => (props.collapse ? "0.2rem" : "")};
    }
  }

  .secondary {
    margin-top: 0;
  }

  @media screen and (max-width: 1240px) {
    width: ${(props) => (props.collapse ? "7rem" : "100%")};

    .menu-items {
      display: flex;
      flex-direction: column;
      align-items: center;

      .menu {
        max-width: ${(props) => (props.collapse ? "6.5rem" : "100%")};
        height: 6.5rem;
      }
    }
  }

  @media screen and (max-width: 1007px) {
    width: ${(props) => (props.collapse ? "10rem" : "100%")};

    .menu-items {
      .menu {
        max-width: ${(props) => (props.collapse ? "8rem" : "100%")};
        height: 6.5rem;
      }
    }
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
