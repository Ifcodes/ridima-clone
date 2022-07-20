import styled from "styled-components";

export const ActivitiesWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

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

  @media screen and (max-width: 640px) {
    .heading {
      padding: 1rem 1rem 0;
      display: block;

      .bars-cont {
        padding: 0 1rem;
        gap: 0;
        left: 0;

        .bar:not(:first-child) {
          margin-left: -6rem;
        }
        .bar:nth-child(1) {
          z-index: 25;
        }
        .bar:nth-child(2) {
          z-index: 20;
        }
        .bar:nth-child(3) {
          z-index: 15;
        }
        .bar:nth-child(4) {
          z-index: 10;
        }
        .bar:nth-child(5) {
          z-index: 5;
        }
      }

      .title-cont {
        h1 {
          margin: 0;
        }
        p {
          display: none;
        }
      }
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

    .cta-cont {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    .content {
      width: 100%;
      height: 50vh;
      overflow-y: auto;
      justify-content: flex-start;
      padding: 1rem 0 4rem;

      .empty-page-icon {
        width: 70%;
        height: 10rem;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .cta-cont {
        padding: 0 3rem;
      }
    }
  }
`;

export const TransactionsPageWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem 3rem 14rem;
  overflow-y: auto;

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

  @media screen and (max-width: 640px) {
    padding: 2rem 1.2rem 14rem;
    height: 70%;
    overflow-y: auto;

    .title-filter-cont {
      .filter-selectors {
        .filter-btn {
          padding: 0.4rem 0.7rem;
        }
      }
    }
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
  justify-content: space-between;
  padding: 0 1.5rem 1rem;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 24px;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 24px;
  }

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    margin: 1rem auto;
  }

  .calendar-cont {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .rdrCalendarWrapper {
    width: 100%;
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    overflow-y: auto;
  }

  .rdrDateDisplayWrapper {
    width: 100%;
  }

  .rdrMonthAndYearWrapper {
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1075px) {
    .rdrCalendarWrapper {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 640px) {
    .rdrCalendarWrapper {
      width: 100%;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 320px) {
    .rdrCalendarWrapper {
      font-size: 0.6rem;
    }
  }
`;
