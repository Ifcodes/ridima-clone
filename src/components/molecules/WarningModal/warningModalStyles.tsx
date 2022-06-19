import styled from "styled-components";

export const WarningModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 3rem 2.5rem;

  .icon-text-cont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      margin-top: 2.9rem;
    }
  }
`;
