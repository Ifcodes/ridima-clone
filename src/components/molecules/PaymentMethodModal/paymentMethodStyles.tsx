import styled from "styled-components";

export const PayMethodWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    text-align: center;
    margin: 0;
  }

  .cards-wrapper {
    margin-top: 2.5rem;

    .card-div {
      margin-top: 1.5rem;
    }
  }
`;
