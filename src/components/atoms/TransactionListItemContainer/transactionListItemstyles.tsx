import styled from "styled-components";

export const TransactionDetailWrapper = styled.div<{
  type?: string;
  status?: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;

  .icon-cont {
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 0.75rem;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }

    svg {
      max-width: 100%;
    }
  }

  .detail-cont {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin-left: 1.3rem;
    border-bottom: 0.5px solid #e0e0e0;
    padding: 1.2rem 0 1.5rem;

    .transaction-type-cont {
      cursor: pointer;

      h3 {
        margin: 0 0 0.5rem;
        color: ${(props) => props.theme.colors.grey1};
        font-size: 1rem;
      }

      .product {
        font-size: 0.8125rem;
        color: ${(props) => props.theme.colors.grey4};
      }

      .date-mobile {
        display: none;
      }
    }

    .date-cont {
      span {
        color: ${(props) => props.theme.colors.grey3};
      }
    }

    .amount-cont {
      .status-mobile {
        display: none;
      }

      .amount {
        font-size: 1rem;
        font-weight: 500;
        color: ${(props) =>
          props.type === "debit"
            ? props.theme.colors.red
            : props.type === "credit"
            ? props.theme.colors.green2
            : props.theme.colors.grey1};
      }
    }

    .option-icon-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    .icon-cont {
      width: 3.7rem;
      height: 3.2rem;

      svg {
        width: 80%;
      }
    }
    .detail-cont {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      .transaction-type-cont {
        .product {
          display: none;
        }

        .date-mobile {
          display: block;
          font-size: 0.8125rem;
          color: ${(props) => props.theme.colors.grey4};
        }
      }

      .date-cont {
        display: none;
      }

      .amount-cont {
        text-align: right;

        .amount {
          font-size: 1rem;
        }

        .status-mobile {
          display: block;
          color: ${(props) =>
            props.status === "Rejected"
              ? props.theme.colors.red
              : props.status === "Successfull"
              ? "#27AE60"
              : props.status === "Pending"
              ? props.theme.colors.yellow
              : ""};

          font-size: 0.8rem;
          line-height: 18px;
        }
      }
      .option-icon-cont {
        display: none;
      }
    }
  }
`;

export const TransactionStatusWrapper = styled.div<{
  status?: string;
}>`
  width: 8rem;
  padding: 0.8rem;
  background-color: ${(props) =>
    props.status === "Rejected"
      ? "rgba(232, 19, 19, 0.2)"
      : props.status === "Successfull"
      ? "#EAFAF1"
      : props.status === "Pending"
      ? "rgba(245, 207, 72, 0.3)"
      : ""};
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${(props) =>
      props.status === "Rejected"
        ? props.theme.colors.red
        : props.status === "Successfull"
        ? "#27AE60"
        : props.status === "Pending"
        ? props.theme.colors.yellow
        : ""};

    font-size: 0.8rem;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
