import styled from "styled-components";

export const MobileBottomNavWrapper = styled.footer`
  display: none;

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 10vh;
    background-color: white;
    border-top: 1px solid rgba(113, 101, 227, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    position: fixed;
    bottom: 0;

    .tab {
      .text-cont {
        display: flex;
        /* align-items: center; */

        span {
          color: ${(props) => props.theme.colors.blue};
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0;
        }

        &::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: ${(props) => props.theme.colors.blue};
          margin-right: 0.5rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
`;
