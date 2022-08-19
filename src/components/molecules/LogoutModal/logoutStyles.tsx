import styled from "styled-components";

export const LogoutModalWrapper = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 2rem 3rem;

  .logout-text-wrapper {
    width: 70%;
    height: 60%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: ${(props) => props.theme.colors.deepPurple};
    font-size: 1.5rem;
  }

  .logout-btn-wrapper {
    width: 100%;
  }
`;
