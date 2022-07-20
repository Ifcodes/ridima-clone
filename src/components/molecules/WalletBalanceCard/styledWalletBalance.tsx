import styled from "styled-components";

export const WalletCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .cardbg-mobile {
    display: none;
  }

  .card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      color: white;
      margin-top: 1rem;
    }

    .currency {
      font-size: 1.5rem;
      font-weight: 400;
      color: white;
    }

    .wallet-card-btn-cont {
      margin-top: 1rem;
      width: 18rem;
    }

    .btn-cont-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    display: flex;
    align-items: center;

    .cardbg-mobile {
      display: block;
    }
    .cardbg {
      display: none;
    }

    .card-content {
      height: 90%;
      justify-content: space-around;
      padding: 2rem 1rem 0;

      .text-cont {
        max-width: 100%;
        h1 {
          font-size: 2rem;
        }
      }

      .wallet-card-btn-cont {
        display: none;
      }

      .btn-cont-mobile {
        display: flex;
        width: 10rem;
        max-width: 100%;
        /* margin: 0 0.4rem; */
      }
    }
  }

  @media screen and (max-width: 320px) {
    .card-content {
      justify-content: space-between;

      .text-cont {
        max-width: 100%;
        h1 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
