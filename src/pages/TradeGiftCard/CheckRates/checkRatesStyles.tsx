import styled, { css } from "styled-components";

export const CheckRatesWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CheckRatesModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

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

  .btn-cont {
    margin-top: 0.5rem;
  }
`;

export const CheckRatesFormWrapper = styled.div<{ isActive?: boolean }>`
  width: 100%;
  /* margin: 2rem 0; */

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
`;

export const IconWrapper = styled.div<{ iconIsSelected?: boolean }>`
  width: max-content;
  height: max-content;
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
`;

export const CheckRatesMainWrapper = styled.div`
  width: 100%;
  height: 80vh;

  .stepper-cont {
    margin-top: 2rem;
  }
`;
