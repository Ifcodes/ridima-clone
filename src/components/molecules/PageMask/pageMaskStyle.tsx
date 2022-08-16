import styled from "styled-components";

export const DisabledWraper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  .header-container {
    width: 100%;
    height: 4.6rem;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    background-color: ${({ theme }) => theme.colors.red};
    color: white;

    span {
      margin-left: 1rem;
    }
  }
`;
