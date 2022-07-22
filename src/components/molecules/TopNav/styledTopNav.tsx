import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 4.5rem;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(113, 101, 227, 0.2);

  position: sticky;
  top: 0;
  left: 0;

  .info-icon {
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    height: 4rem;
    padding: 0.5rem 1rem;

    .info-icon {
      width: 1.5rem;
      height: 1.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
