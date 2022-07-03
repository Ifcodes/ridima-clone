import { DetailedHTMLProps } from "react";
import styled from "styled-components";

export const CreateAccountFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  overflow: auto;

  .input-fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-cont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .alternative-nav-cont {
      margin-top: 1rem;
    }
  }
  ::-webkit-scrollbar {
    width: 0;
  }

  .password-hint {
    color: ${(props) => props.theme.colors.blue};
    font-size: 0.875rem;
    text-align: center;
    font-weight: 500;
  }

  .alternative {
    width: 27rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2rem;

    .right-vec {
      margin: 0;
      display: flex;
      align-items: center;
      transform: rotate(180deg);
    }

    span {
      width: 50%;
      font-size: 0.87rem;
      font-weight: 500;
      text-align: center;
      color: ${(props) => props.theme.colors.grey4};
    }
  }

  .alternative-nav-cont {
    margin-top: 1.4rem;
  }

  @media screen and (max-width: 640px) {
    height: 100%;
    padding: 0 1rem 4.5rem;

    .input-fields {
      width: 90%;

      h1 {
        color: ${(props) => props.theme.colors.deepPurple};
        margin: 0;
      }
    }
  }
`;

export const VerifyOtpWrapper = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2.5rem 1.5rem;
  background-color: white;
  border-radius: 2.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  .form-cont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 18.7rem;
      text-align: center;
    }

    .img-cont {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20rem;
      height: 15rem;

      img {
        width: 20rem;
        height: 13rem;
      }
    }

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .verify-input {
        width: 100%;
        padding: 0 3rem;

        input {
          text-align: center;
          font-weight: 700;
          font-size: 1.5rem;
        }
      }

      .btn-cont {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100vh;
    padding: 0 2.5rem 2rem;

    .form-cont {
      height: 100vh;

      form {
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .btn-cont {
          width: 100%;
          margin: 1rem 0 2rem;
        }
      }
    }
  }
`;
