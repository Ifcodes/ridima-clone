import styled from "styled-components";

export const TradeGiftCardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* font-size: 1rem; */

  .default {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    margin-top: 3rem;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 640px) {
    height: 90vh;

    .tabs-wrapper {
      padding: 1.5rem;
    }

    .default {
      width: 100%;
      height: 100%;
      padding: 0 1.5rem 4rem;
      overflow-y: auto;
      margin-top: 0;
      display: block;
    }
  }
`;

export const SellGiftCardWrapper = styled.div<{ stage?: number }>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;

  .heading {
    width: 100%;
    height: 13rem;
    background-color: ${(props) => props.theme.colors.blue};
    background-image: url("/vectors/BlueHeadingRecWithPattern.svg");
    background-size: cover;
    background-repeat: none;
    padding: 2rem 3rem 1rem;
  }

  .default {
    padding: 2rem 3rem 1rem;
  }

  .search-cont {
    margin-top: 2.5rem;
  }

  .main-content {
    max-width: 100%;
    height: 90%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: ${(props) =>
      props.stage === 2 ? "2rem 3rem 0" : "2rem 3rem 12rem"};

    .title-cont {
      padding: 0 1.5rem;
    }

    .content {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      margin-top: 2rem;
      grid-gap: 2rem;
      padding: 1rem 1.5rem;
    }
  }

  @media screen and (max-width: 640px) {
    .heading {
      padding: 1.5rem;
    }

    .default {
      padding: 1rem;
    }

    .main-content {
      width: 100%;
      height: 100%;
      align-items: center;
      padding: 1rem 0 5rem;

      .title-cont {
        align-self: flex-start;
        width: 100%;
      }

      .content {
        width: 100%;
        grid-column-gap: 3rem;
        padding-bottom: 18rem;
      }
    }
  }
`;

export const ActiveGiftCardWrapper = styled.div<{
  padding?: string;
  scrollOnMobile?: boolean;
}>`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => props.padding || ""};
  padding: 1rem;

  .active-card-cont-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .stepper-wrap {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .stepper-wrap-mobile {
    display: none;
  }

  .card-img-wrap {
    width: 18.25rem;
    height: 9rem;
    border-radius: 0.875rem;

    svg {
      width: 100%;
      height: 100%;
      border-radius: 0.875rem;
    }
  }

  .selector {
    margin-top: 2.5rem;
  }

  .card-types-heading {
    margin: 2.5rem 0 0;
  }

  .card-types-cont {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7.125rem, 8rem));
    margin: 1.5rem 0;
    grid-gap: 1rem;
  }

  .tradecard-btn-cont {
    margin-top: 2rem;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-y: auto;
    padding-bottom: 4rem;

    .active-card-cont-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stepper-wrap {
      display: none;
    }

    .stepper-wrap-mobile {
      width: 100%;
      display: block;
      margin-bottom: 2rem;
    }

    .selector {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-img-wrap {
      width: 100;
    }

    .card-types-heading {
      width: 100%;
    }

    .card-types-cont {
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(7.125rem, 1fr));
      align-items: center;
      justify-content: center;
    }

    .tradecard-btn-cont {
      width: 100%;
      max-width: 27rem;
      margin-bottom: 2.5rem;

      /* button {
        margin: 4rem 0 0;
      } */
    }
  }
`;

export const SubCategoryWrapper = styled.div<{
  isBigInt?: boolean;
  isActive?: boolean;
}>`
  .amount-field-cont {
    width: 25rem;
    display: grid;
    grid-template-columns: 1fr 7.5rem;
    align-items: center;
    margin-top: 1rem;
    grid-gap: 1rem;
  }

  .value-display-cont {
    width: 25rem;
    display: flex;
    flex-direction: ${(props) => (props.isBigInt ? "column" : "row")};
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.grey2};

    .value-cont {
      width: max-content;
      display: flex;
      align-items: center;
      margin: ${(props) => (props.isBigInt ? "1rem 0" : "")};
      font-family: "cera_promedium";

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

  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    .amount-field-cont {
      width: 100%;
      max-width: 27rem;
      align-self: center;
    }

    .subcat-cont {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .value-display-cont {
      width: 100%;
    }
  }
`;

export const UploadImageWrapper = styled.div`
  width: 100%;

  .title-cont {
    margin: 1.5rem 0 1rem;
  }

  .ecode-cont {
    width: 25rem;
  }

  .selected-imgs {
    width: 100%;
    display: flex;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem));
    grid-gap: 1.5rem;
    align-items: center;

    .img-cont {
      width: 100%;
      height: 10rem;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      object-fit: contain;
      border: 1px solid ${(props) => props.theme.colors.grey1};
      position: relative;

      .remove-img {
        color: red;
        position: absolute;
        right: -1rem;
        top: -1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        background-color: ${(props) => props.theme.colors.grey6};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        cursor: pointer;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    padding: 0 1rem;
    .ecode-cont {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const TradeSummaryWrapper = styled.div`
  .card-wrapper {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 640px) {
    max-width: 100%;

    .hr-line {
      margin-top: 0;
    }
  }
`;

export const CardTermsModalWrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 0;

  .title {
    width: 23rem;
    text-align: center;

    h1 {
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  .btn-cont {
    width: 100%;
    margin-top: 6rem;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 1rem 1.3rem;

    .title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .btn-cont {
      margin-top: 4rem;
    }
  }
`;
