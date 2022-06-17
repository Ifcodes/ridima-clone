import styled from "styled-components";

export const UseUssdCodeContainer = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  .other-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    .card-cont {
      width: 100%;
      margin-top: 2rem;
    }

    .description {
      color: ${(props) => props.theme.colors.deepPurple};
      font-size: 0.875rem;
      align-self: flex-start;
      font-weight: 400;
    }
  }
`;
