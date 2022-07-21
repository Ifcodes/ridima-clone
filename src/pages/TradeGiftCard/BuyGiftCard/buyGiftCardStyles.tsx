import styled from "styled-components";

export const BuyGiftCardTermsModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    margin: 1.2rem 0;
    text-align: center;
  }
  ol {
    margin-top: 0;

    li {
      margin-top: 1rem;
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  .btn-cont {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const CardAmountFormWrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;
  margin-top: 2rem;

  .form-cont {
    width: 27rem;
  }

  .value-display-cont {
    display: block;
    text-align: center;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.grey2};

    .value-cont {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;

      .symbol,
      h1 {
        margin: 0 0.5rem;
        font-size: 2.5rem;
        font-weight: 700;
      }

      .symbol {
        color: rgba(113, 101, 227, 1);
      }

      h1 {
        color: ${(props) =>
          props.isActive
            ? props.theme.colors.blue
            : "rgba(113, 101, 227, 0.3)"};
      }
    }
  }

  .buy-giftCard-cta {
    width: 27rem;
    margin-top: 5rem;

    p {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.grey2};
      text-align: center;
    }
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-cont {
      width: 100%;
      max-width: 27rem;
    }

    .buy-giftCard-cta {
      width: 100%;
    }
  }
`;
