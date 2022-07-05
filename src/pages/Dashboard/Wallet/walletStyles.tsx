import styled from "styled-components";

export const WalletpageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const WalletpageDefaultWrapper = styled.div`
  .wallet-card-cont {
    margin-top: 2.6rem;
  }

  .horizontal-line-cont {
    margin-top: 3.4rem;
  }

  .action-cards-wrapper {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 11rem));
    grid-gap: 1rem;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 80%;
    overflow-y: auto;
    padding: 1.5rem 1.5rem 4rem;

    h1 {
      margin: 0;
    }

    .wallet-card-cont {
      margin-top: 1.5rem;
      width: 50%;
    }

    .horizontal-line-cont {
      margin-top: 4rem;
    }

    .action-cards-wrapper {
      margin-top: 1.5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.7rem;
      /* padding-bottom: 12rem; */
    }
  }
`;

export const WithdrawPageWrapper = styled.div`
  width: 100%;
  padding-bottom: 8rem;

  .add-card-cont {
    margin-top: 3rem;
    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
      width: 6.5rem;
    }
  }

  .line-cont {
    margin-top: 3rem;
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23rem, 23rem));
    grid-gap: 2rem;
    margin-top: 2rem;
  }
`;

export const SendMoneyWrapper = styled.div`
  width: 100%;

  .searchbox-cont {
    margin-top: 2.5rem;
    width: 100%;
    height: 4.3rem;
  }

  .line-cont {
    margin-top: 3rem;
  }

  .users-wrapper {
    width: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(3.5rem, 3.5rem));
    grid-gap: 1rem;
    margin-top: 2rem;

    .img-cont {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 100%;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
      }

      .remove-img {
        background-color: red;
        color: white;
        position: absolute;
        right: 0rem;
        top: 0rem;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        cursor: pointer;
      }

      :hover .remove-img {
        visibility: visible;
      }
    }
  }
`;

export const ConfirmModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  text-align: center;

  .text-content {
    padding: 0 2rem;
  }
  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  p {
    margin-top: 2.7rem;
    line-height: 2rem;
  }
`;
