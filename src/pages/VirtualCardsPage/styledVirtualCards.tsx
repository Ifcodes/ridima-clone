import styled from "styled-components";

export const VirtualCardsWrapper = styled.section`
  max-width: 100%;

  .stage-header {
    display: flex;
    justify-content: space-between;

    .stage-title-cont {
      width: 100%;
      display: flex;
      /* align-items: center; */

      .home {
        color: ${(props) => props.theme.colors.grey4};
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  .cards-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;

    > div {
      cursor: pointer;
      width: max-content;
      border-radius: 1.5rem;

      :hover {
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
        transition: ease 0.3s;
      }
    }
  }

  @media screen and (max-width: 640px) {
    height: 100%;
    overflow-y: hidden;

    .stage-header {
      padding: 1rem;
      justify-content: flex-end;
      position: relative;

      .mobile-header {
        width: max-content;
        position: absolute;
        left: 1.5rem;
        top: 1.5rem;
      }

      .stage-title-cont {
        display: none;
      }

      button {
        padding: 0;
      }
    }

    .cards-wrapper {
      height: 80%;
      overflow-y: auto;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 12rem;
    }
  }
`;

export const CardDetailsWrapper = styled.div`
  width: 100%;
  margin-bottom: 12rem;

  .stage-title-cont {
    display: flex;

    .home {
      color: ${(props) => props.theme.colors.grey4};
      font-weight: 700;
      cursor: pointer;
    }
  }

  .card-display {
    margin-top: 3.75rem;
  }

  .card-actions-cont {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;
  }

  .card-transaction-heading {
    margin-top: 3rem;
  }

  .transactions {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 1.5rem;
    margin: 3.2rem 0;
  }

  @media screen and (max-width: 640px) {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    margin-bottom: 0;

    .heading {
      width: 100%;
      padding: 1rem 1rem 0;
    }
    .stage-title-cont {
      display: none;
    }

    .action-heading {
      display: none;
    }

    .main-content {
      margin: 0;
      width: 100%;
      height: 80%;
      padding: 0 1rem 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;
      margin-top: 0;
    }
    .card-display {
      margin-top: 1rem;
    }

    .card-actions-cont {
      max-width: 100%;
      gap: 0;

      > div {
        margin: 0 0.5rem;
      }
    }

    .card-transaction-heading {
      width: 100%;
      margin-top: 1rem;
    }

    .transactions {
      margin-top: 1rem;
    }
  }
`;

export const FundCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-gap: 12rem;

  .form-cont {
    margin: 2rem 0;

    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      margin: 0;
    }

    form {
      margin-top: 2rem;

      .exchange-rate-text {
        color: ${(props) => props.theme.colors.blue};
        margin-top: 1rem;
      }

      .arrow-cont {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }
    }
  }

  .virtual-card-cont {
    margin-top: 2rem;
  }

  .modal-content {
    width: 100%;
    height: 100%;
    padding: 1rem 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 80%;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    grid-gap: 0;
    overflow-y: auto;

    .virtual-card-cont {
      margin-top: 1rem;
    }

    .form-cont {
      width: 100%;
      padding: 1rem;
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-cont-title {
        text-align: center;
        width: 80%;
        margin: 0;
      }

      form {
        width: 100%;
        padding: 0 1rem;
      }
    }
  }
`;
export const CardDetailsModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3.5rem;
  overflow-y: auto;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.deepPurple};
    margin-bottom: 0.6rem;
  }

  .card-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 0;
    border-bottom: 1px solid #e0e0e0;

    .label-cont {
      display: flex;
      flex-direction: column;

      .label {
        color: ${(props) => props.theme.colors.grey3};
        font-size: 0.75rem;
      }

      .content {
        color: ${(props) => props.theme.colors.grey1};
        font-size: 0.875rem;
        margin-top: 0.5rem;
      }
    }

    button {
      width: max-content;
      height: max-content;
      padding: 0.5rem 0.6rem;
      background-color: #ebe9fb;
      border-radius: 3.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.blue};
      border: none;
      outline: none;

      span {
        margin-left: 0.4rem;
      }
    }
  }
`;

export const FreezeCardWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .heading {
    margin-top: 2rem;
    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
    }
    p {
      width: 22rem;
      margin-top: 2rem;
      line-height: 1.3rem;
    }
  }
`;
