import styled from "styled-components";

export const WalletBalCardWrapper = styled.div<{
  titleColor?: string;
  amountColor?: string;
  otherValueColor?: string;
  width?: string;
  isDefault?: boolean;
}>`
  width: ${(props) => props.width || "27rem"};
  height: 8.4rem;
  border-radius: 1.5rem;
  position: relative;

  .card-actions-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 4rem;
    /* top: 1.5rem; */

    .action-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 5rem;

      span {
        margin-top: 0.3rem;
        color: white;
      }
    }
  }

  .wallet-card-content {
    width: ${(isDefault) => (isDefault ? "20rem" : "100%")};
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem;
    position: absolute;
    top: 0;
    left: 0;

    .eye-icon {
      cursor: pointer;
    }

    .other-value {
      font-size: 0.75rem;
      color: ${(props) => props.otherValueColor || props.theme.colors.blue};
    }
    .title-amount-cont {
      .title {
        color: ${(props) => props.titleColor || "white"};
        margin: 0 0 0.625rem;
      }

      .amount-cont {
        display: flex;

        .amount {
          color: ${(props) => props.amountColor || "white"};
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

  .wallet-cardBg {
    width: 100%;

    svg {
      width: 100%;
    }
  }

  .default-cardBg {
    width: 100%;
    height: 100%;

    .large-screen {
      width: 100%;

      svg {
        width: 100%;
        height: 8.4rem;
      }
    }

    .mobile-screen {
      display: none;
    }
  }

  .wallet-cardBg-mobile {
    display: none;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: ${(props) => (props.isDefault ? "max-content" : "8.4rem")};

    .wallet-card-content {
      width: 100%;

      .eye-icon {
        display: flex;
        justify-content: flex-end;
      }
    }

    .card-actions-wrapper {
      height: 50%;
      bottom: 2rem;
      left: 0;
      width: 100%;
      justify-content: space-around;

      .action-wrapper {
        margin-left: 0;
      }
    }

    .default-cardBg {
      width: 100%;
      height: 100%;

      .large-screen {
        display: none;
      }

      .mobile-screen {
        display: block;
        width: 100%;
        height: 100%;

        svg {
          width: 100%;
        }
      }
    }
  }
`;
