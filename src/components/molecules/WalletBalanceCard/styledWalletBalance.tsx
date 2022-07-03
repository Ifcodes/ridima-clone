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
    height: 80%;
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: white;
      margin-top: 1rem;
    }

    .currency {
      font-size: 1.5rem;
      font-weight: 400;
      color: white;
    }

    .btn-cont {
      width: 18rem;
    }

    .btn-cont-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    .cardbg-mobile {
      display: block;
    }
    .cardbg {
      display: none;
    }

    .card-content {
      height: 90%;
      padding: 2rem 0 0;

      .text-cont {
        margin-left: 1rem;
      }

      .btn-cont {
        display: none;
      }

      .btn-cont-mobile {
        display: block;
        width: 10rem;
        margin-left: 0.4rem;
      }
    }
  }
`;
