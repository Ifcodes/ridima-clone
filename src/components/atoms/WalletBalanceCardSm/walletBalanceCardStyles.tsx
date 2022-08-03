import styled from "styled-components";

export const WalletBalCardWrapper = styled.div<{
  titleColor?: string;
  amountColor?: string;
  otherValueColor?: string;
  showDefault?: boolean;
}>`
  width: 27rem;
  height: 8.4rem;
  border-radius: 1.5rem;
  position: relative;

  .wallet-card-content {
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

  .wallet-cardBg-mobile {
    display: none;
  }

  @media screen and (max-width: 640px) {
    width: 100%;

    .wallet-card-content {
      width: 100%;

      .eye-icon {
        display: flex;
        justify-content: flex-end;
      }
    }

    .wallet-cardBg {
      display: ${(props) => (props.showDefault ? "none" : "block")};
    }
  }
`;
