import styled from "styled-components";

export const TradeSummaryWrapper = styled.div`
  width: 27rem;
  height: 24rem;
  border-radius: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.grey5};
  padding: 1.8rem 2rem;

  .card-heading {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.grey5};
    padding: 0 1rem 1.75rem;

    .card-title-cont {
      margin-left: 1.2rem;

      h2 {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.grey1};
        margin: 0;
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.grey3};
      }
    }
  }

  .details-cont {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey5};

    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;
    }
  }
`;
