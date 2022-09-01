import styled from "styled-components";

export const TradeSummaryWrapper = styled.div`
  width: 27rem;
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
        line-height: 24px;
      }
    }
  }

  .details-cont {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey5};
    padding: 0.5rem;

    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;

      span {
        font-size: 0.75rem;
        color: ${(props) => props.theme.colors.grey2};
      }
    }
  }

  .selected-imgs-cont {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 6.2rem));
    align-items: center;
    grid-gap: 1.5rem;
    margin-top: 1.3rem;

    .add-file-cont {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
