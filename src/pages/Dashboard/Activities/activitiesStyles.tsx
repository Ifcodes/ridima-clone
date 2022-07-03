import styled from "styled-components";

export const ActivitiesWrapper = styled.div`
  width: 100%;

  .heading {
    width: 100%;
    height: 14.7rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    .title-cont {
      h1 {
        color: white;
      }

      p {
        color: rgba(255, 255, 254, 0.3);
      }
    }

    .bars-cont {
      display: flex;
      gap: 1rem;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      right: 3rem;
    }
  }
`;

export const EmptyTransactionPageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 20rem);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p {
      width: 19rem;
      text-align: center;
      color: ${(props) => props.theme.colors.grey3};
    }
  }
`;

export const TransactionsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem 8rem;

  .title-filter-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .filter-selectors {
      display: flex;
      align-items: center;
      gap: 1rem;

      .filter-btn {
        width: max-content;
        height: max-content;
        padding: 0.7rem 1rem;
        border: 1.14554px solid #e0e0e0;
        background-color: white;
        border-radius: 9.16432px;

        span {
          margin-right: 1rem;
        }
      }
    }
  }

  .transaction-cont {
    width: 100%;
    margin-top: 2rem;
  }

  .yesterday-title {
    margin-top: 2rem;
  }
`;

export const FilterModalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    margin: 0;
  }
  .options-cont {
    width: 100%;
  }

  .statuses-cont {
    width: 100%;
    margin-top: 2rem;

    p {
      font-weight: 500;
    }

    .statuses {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;
    }
  }
`;

export const StatusWrapper = styled.div<{
  status?: string;
  isActive?: boolean;
}>`
  width: max-content;
  height: max-content;
  padding: 1rem 1.3rem;
  border-radius: 3.125rem;
  font-weight: 500;
  border: 1px solid
    ${(props) =>
      props.status === "Rejected"
        ? props.theme.colors.red
        : props.status === "Success"
        ? "#27AE60"
        : props.status === "Pending"
        ? props.theme.colors.yellow
        : ""};
  background-color: ${(props) =>
    props.isActive && props.status === "Rejected"
      ? props.theme.colors.red
      : props.isActive && props.status === "Success"
      ? "#27AE60"
      : props.isActive && props.status === "Pending"
      ? props.theme.colors.yellow
      : ""};
  color: ${(props) =>
    props.isActive
      ? "white"
      : props.status === "Rejected"
      ? props.theme.colors.red
      : props.status === "Success"
      ? "#27AE60"
      : props.status === "Pending"
      ? props.theme.colors.yellow
      : ""};
  cursor: pointer;
`;

export const TransactionDetailModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    margin: 0;
  }

  .content-title {
    color: ${(props) => props.theme.colors.grey4};
    font-size: 0.875rem;
    margin-top: 1.25rem;
  }

  .content-text {
    color: ${(props) => props.theme.colors.grey1};
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }

  .error-message {
    color: ${(props) => props.theme.colors.red};
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }

  .transaction-ref {
    margin-top: 1.125rem;
    .ref-content {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .amount-cont {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .expected-value {
    margin-top: 1rem;

    .status-wrapper {
      margin-top: 0.5rem;
    }
  }
`;

export const DateFilterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }
`;