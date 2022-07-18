import styled, { css } from "styled-components";

export const CheckRatesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media screen and (max-width: 640px) {
    padding: 0 1.5rem 5rem;
  }
`;

export const CheckRatesModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem 1rem 1.5rem;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: ${(props) => props.theme.colors.deepPurple};
      margin: 1.5rem 0;
    }

    p {
      width: 22rem;
    }

    .img-cont {
      width: 17rem;
      height: 18rem;
      margin: 1.5rem 0;

      img {
        width: 100%;
      }
    }
  }

  .check-rate-modal-cta {
    width: 100%;
    /* margin-top: 0.5rem; */
  }

  @media screen and (max-width: 640px) {
    .content {
      p {
        width: 75%;
        margin: 0;
      }

      h1 {
        margin: 1rem 0;
      }

      .img-cont {
        width: 60%;
        height: 10rem;
        margin-top: 3rem;
      }
    }
  }
`;

export const CheckRatesFormWrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;
  height: 100%;

  .title-cont {
    margin-top: 2rem;
  }

  .form-content {
    width: 27rem;
    margin-top: 0.5rem;

    .rates {
      color: ${(props) => props.theme.colors.blue};
      font-weight: 500;
      margin: 1rem 0;
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
  }

  .card-type-cont {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }

  .card-type {
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.7rem;
      margin-top: 1rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-type-cont {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .card-type {
        width: 40%;
        margin: 0;

        svg {
          width: 100%;
        }
      }
    }

    .hr-line-title {
      width: 100%;
    }
  }
`;

export const IconWrapper = styled.div<{ iconIsSelected?: boolean }>`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  ${(props) =>
    props.iconIsSelected &&
    css`
      border: 1.6px solid #7165e3;
      box-shadow: 0 0 16px 1px rgba(113, 101, 227, 0.3);
    `}
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: max-content;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CheckRatesMainWrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: hidden;

  .stepper-cont {
    margin-top: 2rem;
  }

  @media screen and (max-width: 640px) {
    .stage-title-wrap {
      margin: 1.5rem;
    }
  }
`;
