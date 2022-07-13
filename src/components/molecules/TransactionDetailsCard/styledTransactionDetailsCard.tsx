import styled from "styled-components";
import { BadgeProp } from "../../atoms/TransactionTypeBadge";

export const DetailsCardWrapper = styled.div<BadgeProp>`
  width: 22rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon-title-cont {
    display: flex;
    align-items: center;

    .title-cont {
      margin: 0.5rem 0;
      margin-left: 0.75rem;

      p {
        color: ${(props) => props.theme.colors.grey1};
        font-weight: 500;
        padding: 0;
        margin: 0;
        line-height: 1.3rem;
      }

      .time {
        color: ${(props) => props.theme.colors.grey3};
        font-size: 0.75rem;
      }
    }
  }

  .amount {
    color: ${(props) =>
      props.transactionType === "credit"
        ? props.theme.colors.green2
        : props.theme.colors.red};
    font-size: 1.125rem;
    font-weight: 500;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
