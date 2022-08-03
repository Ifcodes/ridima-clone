import styled from "styled-components";

export const BankTfPayMethodWrapper = styled.div`
  width: 100%;
  height: 11rem;
  background-color: #f6f6f6;
  border-radius: 0.625rem;
  border: 1px solid rgba(63, 30, 75, 0.1);
  padding: 1.5rem 2rem;

  .card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .head-title {
      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.deepPurple};
    }

    .copyicon-cont {
      cursor: pointer;
    }
  }

  .detail {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    .title {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.deepPurple};
    }

    .value {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.deepPurple};
    }
  }
`;
