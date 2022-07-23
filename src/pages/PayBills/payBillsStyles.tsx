import styled from "styled-components";

export const PayBillsWrapper = styled.div`
  width: 100%;

  @media screen and (max-width: 640px) {
    height: 80%;
    padding-bottom: 4rem;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const PayBillsDefaultWrapper = styled.div`
  .title-cont {
    margin-top: 3.75rem;

    h1 {
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.deepPurple};
      margin: 0.5rem 0;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.grey2};
    }
  }
  .cards-cont {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem));
    grid-gap: 1.5rem;
    margin-top: 2.6rem;
  }

  @media screen and (max-width: 640px) {
    .title-cont {
      text-align: center;
      margin: 1.5rem;
    }
    .cards-cont {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      /* grid-gap: 1rem; */
      margin-top: 1.5rem;

      .card-wrapper {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const SelectedBillWrapper = styled.div`
  margin-top: 3.75rem;
  padding: 0 0 6rem;

  width: 100%;

  .title-cont {
    margin-top: 2.6rem;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 0;

    .billcard-cont {
      display: flex;
      justify-content: center;
    }
  }
`;

export const FormWrapper = styled.div<{ isData?: boolean }>`
  .airtime-form {
    width: 100%;
    margin-top: 2rem;

    .inputField-wrapper {
      display: ${(props) => (props.isData ? "flex" : "block")};
      margin-top: ${(props) => (props.isData ? "1.5rem" : "")};

      div {
        margin-right: 2rem;
        margin-top: ${(props) => (props.isData ? "0" : "")};
      }
    }

    .amount-cont {
      width: 27rem;
      text-align: center;
      margin-top: 1.5rem;

      .enter-amount {
        color: ${(props) => props.theme.colors.blue};
      }

      input {
        text-align: center;
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .airtime-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;

      .inputField-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
          margin-bottom: 1rem;
          margin-right: 0;
        }
      }

      .amount-cont {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
          margin-right: 0;
        }
      }
    }
  }
`;

export const ConfirmModalWrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .account-name,
    .data-bundle {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.grey1};
      font-weight: 500;
      margin-top: 1rem;
    }

    .account-name {
      font-weight: 400;
    }

    .amount {
      color: ${(props) => props.theme.colors.blue};
      font-size: 2.8rem;
      margin-top: 2rem;
    }

    .fee {
      font-size: 0.8rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.grey2};
    }
  }
`;
