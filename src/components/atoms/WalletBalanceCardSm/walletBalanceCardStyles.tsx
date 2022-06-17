import styled from "styled-components";

export const WalletBalCardWrapper = styled.div`
  width: 27rem;
  height: 8.4rem;
  border-radius: 1.5rem;
  position: relative;

  .card-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;

    .eye-icon {
      cursor: pointer;
    }

    .title-amount-cont {
      .title {
        color: white;
        margin: 0 0 0.625rem;
      }

      .amount-cont {
        display: flex;
        .amount {
          color: white;
          font-size: 2rem;
          font-weight: 700;
          margin: 0.6rem 0;

          sup {
            font-size: 1rem;
            font-weight: 400;
          }
        }
      }

      .mask {
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        margin-top: 0.6rem;
      }
    }
  }

  img {
    width: 100%;
  }
`;
