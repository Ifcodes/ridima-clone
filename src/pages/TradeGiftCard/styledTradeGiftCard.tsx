import styled from "styled-components";

export const TradeGiftCardWrapper = styled.div`
  width: 100%;
  overflow: auto;

  .default {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
    margin-top: 3rem;
    grid-gap: 1rem;
  }
`;

export const SellGiftCardWrapper = styled.div`
  width: 100%;

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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem 3rem;

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
      margin-top: 2rem;
      grid-gap: 1rem;
    }
  }
`;

export const ActiveGiftCardWrapper = styled.div`
  .stepper-cont {
    margin-top: 3rem;
  }
  .selector {
    margin-top: 2.5rem;
  }

  .card-types-heading {
    margin: 2.5rem 0 1.5rem;
  }

  .card-types-cont {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7.125rem, 8rem));
    margin-top: 2rem;
    grid-gap: 1rem;
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
    align-items: center;

    .img-list-cont {
      width: 100%;
      display: grid;
      margin-left: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem));
      column-gap: 1.5rem;
    }

    .img-cont {
      width: 100%;
      height: 10rem;
      border-radius: 8px;
      margin-left: 1.5rem;
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
`;

export const TradeSummaryWrapper = styled.div`
  .hr-line {
    margin-top: 2rem;
  }

  .card-wrapper {
    margin-top: 1.5rem;
  }
`;

export const CardTermsModalWrapper = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  .title {
    width: 21rem;

    h1 {
      text-align: center;
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  .btn-cont {
    width: 100%;
  }
`;

export const SuccessMessageWrapper = styled.div<{ errorMessage?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.errorMessage ? "1.7rem" : "")};

  .img-cont {
    width: 60%;
    height: 16rem;
    max-width: 20rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-cont {
    text-align: center;
    width: 22rem;

    h1 {
      color: ${(props) =>
        props.errorMessage
          ? props.theme.colors.red
          : props.theme.colors.green2};
      margin: ${(props) => (props.errorMessage ? "2rem" : "0")};
    }
  }

  .btn-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 0;
  }
`;
